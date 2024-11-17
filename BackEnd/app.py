# Importa as classes e funções necessárias do Flask
from flask import Flask, request, jsonify
# Importa a biblioteca psycopg2 para conexão com o banco de dados PostgreSQL
import psycopg2
# Importa as configurações do banco de dados do arquivo config.py
from config import DATABASE

# Cria a aplicação Flask
app = Flask(__name__)

# Função para estabelecer a conexão com o banco de dados
def get_db_connection():
    try:
        conn = psycopg2.connect(
            dbname=DATABASE['dbname'],
            user=DATABASE['user'],
            password=DATABASE['password'],
            host=DATABASE['host'],
            port=DATABASE['port']
        )
        return conn
    except Exception as e:
        print("Erro ao conectar ao banco de dados:", e)
        return None  # Retorna None em caso de erro

# Define a rota /new_user, que aceita requisições HTTP do tipo POST
@app.route('/new_user', methods=['POST'])
def new_user():
    if not request.is_json:
        return jsonify({"error": "Content-Type deve ser application/json"}), 415

    data = request.get_json()  # Obter o JSON do corpo da requisição
    nome = data.get('nome')
    sobrenome = data.get('sobrenome')
    email = data.get('email')
    numero = data.get('numero')
    senha = data.get('senha')

    # Verifica se todos os campos foram enviados
    if not all([nome, sobrenome, email, numero, senha]):
        return jsonify({"error": "Todos os campos são obrigatórios"}), 400

    try:
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Não foi possível conectar ao banco de dados"}), 500

        cursor = conn.cursor()
        query = """
            INSERT INTO usuarios (nome, sobrenome, email, numero, senha)
            VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (nome, sobrenome, email, numero, senha))
        conn.commit()

        cursor.close()
        conn.close()

        return jsonify({"message": "Usuário adicionado com sucesso"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
# Nova rota para verificação de login
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    senha = data.get('senha')

    if not all([email, senha]):
        return jsonify({"error": "E-mail e senha são obrigatórios"}), 400

    try:
        conn = get_db_connection()
        cursor = conn.cursor()

        # Consulta o banco de dados para verificar as credenciais
        query = "SELECT * FROM usuarios WHERE email = %s AND senha = %s"
        cursor.execute(query, (email, senha))
        user = cursor.fetchone()

        cursor.close()
        conn.close()

        if user:
            return jsonify({"message": "Login bem-sucedido"}), 200
        else:
            return jsonify({"error": "Credenciais inválidas"}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota para cadastrar um produto no estoque
@app.route('/estoque/cadastrar', methods=['POST'])
def cadastrar_produto():
    dados = request.json
    try:
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Não foi possível conectar ao banco de dados"}), 500

        cursor = conn.cursor()
        query = """
            INSERT INTO estoque (produto, preco, marca, cor, codigo, quantidade, condicao, peso, observacoes)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
        """
        cursor.execute(query, (
            dados['produto'],
            dados['preco'],
            dados['marca'],
            dados['cor'],
            dados['codigo'],
            dados['quantidade'],
            dados['condicao'],
            dados['peso'],
            dados.get('observacoes', '')
        ))
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({'mensagem': 'Produto cadastrado com sucesso!'}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota para deletar um produto do estoque
@app.route('/estoque/deletar/<string:codigo>', methods=['DELETE'])
def deletar_produto(codigo):
    try:
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Não foi possível conectar ao banco de dados"}), 500

        cursor = conn.cursor()
        cursor.execute("DELETE FROM estoque WHERE codigo = %s", (codigo,))
        if cursor.rowcount == 0:
            return jsonify({'erro': 'Produto não encontrado'}), 404
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({'mensagem': 'Produto deletado com sucesso!'})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota para editar um produto do estoque
@app.route('/estoque/editar/<string:codigo>', methods=['PUT'])
def editar_produto(codigo):
    dados = request.json
    try:
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Não foi possível conectar ao banco de dados"}), 500

        cursor = conn.cursor()
        query = """
            UPDATE estoque
            SET nome = %s, preco = %s, marca = %s, cor = %s, quantidade = %s, condicao = %s, peso = %s, observacoes = %s
            WHERE codigo = %s
        """
        cursor.execute(query, (
            dados.get('nome'),
            dados.get('preco'),
            dados.get('marca'),
            dados.get('cor'),
            dados.get('quantidade'),
            dados.get('condicao'),
            dados.get('peso'),
            dados.get('observacoes'),
            codigo
        ))
        if cursor.rowcount == 0:
            return jsonify({'erro': 'Produto não encontrado'}), 404
        conn.commit()
        cursor.close()
        conn.close()

        return jsonify({'mensagem': 'Produto atualizado com sucesso!'})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota para listar todos os produtos no estoque
@app.route('/estoque/listar', methods=['GET'])
def listar_produtos():
    try:
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Não foi possível conectar ao banco de dados"}), 500

        cursor = conn.cursor()
        cursor.execute("SELECT nome, preco, marca, cor, codigo, quantidade, condicao, peso, observacoes FROM estoque")
        produtos = cursor.fetchall()
        cursor.close()
        conn.close()

        produtos_lista = [
            {
                'nome': produto[0],
                'preco': produto[1],
                'marca': produto[2],
                'cor': produto[3],
                'codigo': produto[4],
                'quantidade': produto[5],
                'condicao': produto[6],
                'peso': produto[7],
                'observacoes': produto[8]
            } for produto in produtos
        ]
        return jsonify(produtos_lista)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)