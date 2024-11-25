
# Projeto de Gestão de Estoque com Flask e PostgreSQL

Este projeto implementa uma API de gestão de estoque utilizando **Flask**, **PostgreSQL** e **JWT** para autenticação. A API permite realizar operações de cadastro de usuários, login, gestão de produtos no estoque e outras funcionalidades administrativas, como editar, listar e deletar produtos.

## Tecnologias Utilizadas

- **Flask**: Framework para criação de APIs em Python.
- **PostgreSQL**: Banco de dados relacional utilizado para armazenar informações.
- **JWT**: Autenticação via tokens JSON Web Tokens.
- **psycopg2**: Biblioteca para interação com o banco de dados PostgreSQL.
- **CORS**: Permite o compartilhamento de recursos entre diferentes origens.

## Endpoints da API de Gestão de Estoque

### **Cadastrar Novo Usuário**

- **Método**: POST  
- **Rota**: `/new_user`

**Descrição**: Este endpoint permite cadastrar um novo usuário. Ele aceita um corpo de requisição JSON com as informações do usuário.

**Exemplo de Request Body**:
```json
{
  "nome": "João",
  "sobrenome": "Silva",
  "email": "joao@email.com",
  "numero": "123456789",
  "senha": "minhasenha"
}
```

**Respostas**:
- **201 Created**: `{ "message": "Usuário adicionado com sucesso" }`
- **400 Bad Request**: `{ "error": "Todos os campos são obrigatórios" }`
- **415 Unsupported Media Type**: `{ "error": "Content-Type deve ser application/json" }`

---

### **Login**

- **Método**: POST  
- **Rota**: `/login`

**Descrição**: Realiza o login do usuário e retorna um token JWT.

**Exemplo de Request Body**:
```json
{
  "email": "joao@email.com",
  "senha": "minhasenha"
}
```

**Respostas**:
- **200 OK**: `{ "message": "Login bem-sucedido", "token": "<jwt_token>" }`
- **400 Bad Request**: `{ "error": "E-mail e senha são obrigatórios" }`
- **401 Unauthorized**: `{ "error": "Credenciais inválidas" }`

---

### **Perfil do Usuário**

- **Método**: GET  
- **Rota**: `/perfil`

**Descrição**: Retorna as informações do perfil do usuário autenticado.

**Respostas**:
- **200 OK**:
```json
{
  "perfil": {
    "nome": "João",
    "sobrenome": "Silva",
    "email": "joao@email.com",
    "numero": "123456789"
  }
}
```
- **401 Unauthorized**: `{ "error": "Token não fornecido" }`
- **404 Not Found**: `{ "error": "Usuário não encontrado" }`

---

### **Cadastrar Produto no Estoque**

- **Método**: POST  
- **Rota**: `/estoque/cadastrar`

**Descrição**: Cadastra um novo produto no estoque.

**Exemplo de Request Body**:
```json
{
  "produto": "Produto A",
  "preco": 100.50,
  "marca": "Marca A",
  "cor": "Azul",
  "codigo": "12345",
  "quantidade": 10,
  "condicao": "Novo",
  "peso": 1.5,
  "observacoes": "Sem observações"
}
```

**Respostas**:
- **201 Created**: `{ "mensagem": "Produto cadastrado com sucesso!" }`
- **500 Internal Server Error**: `{ "error": "Erro ao conectar ao banco de dados" }`

---

### **Deletar Produto do Estoque**

- **Método**: DELETE  
- **Rota**: `/estoque/deletar/<string:codigo>`

**Descrição**: Deleta um produto do estoque baseado no código fornecido.

**Respostas**:
- **200 OK**: `{ "mensagem": "Produto deletado com sucesso!" }`
- **404 Not Found**: `{ "erro": "Produto não encontrado" }`
- **500 Internal Server Error**: `{ "error": "Erro ao conectar ao banco de dados" }`

---

### **Editar Produto no Estoque**

- **Método**: PUT  
- **Rota**: `/estoque/editar/<string:codigo>`

**Descrição**: Edita as informações de um produto do estoque baseado no código fornecido.

**Exemplo de Request Body**:
```json
{
  "produto": "Produto A Atualizado",
  "preco": 120.50,
  "marca": "Marca A",
  "cor": "Vermelho",
  "quantidade": 15,
  "condicao": "Usado",
  "peso": 2.0,
  "observacoes": "Com pequenas avarias"
}
```

**Respostas**:
- **200 OK**: `{ "mensagem": "Produto atualizado com sucesso!" }`
- **404 Not Found**: `{ "erro": "Produto não encontrado" }`
- **500 Internal Server Error**: `{ "error": "Erro ao conectar ao banco de dados" }`

---

### **Listar Produtos no Estoque**

- **Método**: GET  
- **Rota**: `/estoque/listar`

**Descrição**: Retorna uma lista de todos os produtos no estoque.

**Respostas**:
- **200 OK**:
```json
[
  {
    "produto": "Produto A",
    "preco": 100.50,
    "marca": "Marca A",
    "cor": "Azul",
    "codigo": "12345",
    "quantidade": 10,
    "condicao": "Novo",
    "peso": 1.5,
    "observacoes": "Sem observações"
  },
  {
    "produto": "Produto B",
    "preco": 200.75,
    "marca": "Marca B",
    "cor": "Verde",
    "codigo": "67890",
    "quantidade": 5,
    "condicao": "Usado",
    "peso": 1.8,
    "observacoes": "Com danos"
  }
]
```
- **500 Internal Server Error**: `{ "error": "Erro ao conectar ao banco de dados" }`

---

## Instruções para Execução

1. **Instalar dependências**:
```bash
pip install flask psycopg2 flask-cors pyjwt
```

2. **Configurar o banco de dados**:
   - Crie uma base de dados PostgreSQL com as tabelas `usuarios` e `estoque`.

3. **Executar o servidor Flask**:
```bash
python app.py
```

A aplicação estará disponível em `http://localhost:5000`.

---

## Conclusão

Este projeto oferece uma API simples e funcional para o gerenciamento de estoque, com funcionalidades de autenticação de usuários e operações básicas de CRUD (Create, Read, Update, Delete) no estoque de produtos.
