import { Link } from "react-router-dom";

function Inicio() {
    return (
        <main>
            <div className="bem_vindo">
                <p>Olá Richard Castro. Seja bem-vindo(a) !</p>
            </div>
            <div className="container">
                <h1 className="aba">Inicio</h1>
            </div>
            <div>
                <div className="linha_main"></div>
            </div>
            <div className="cards">
                <div className="caixa" id="caixa_faturamento">
                    <h2 className="titulo">Faturamento 2024</h2>
                    <p className="valor">R$ 10.000</p>
                </div>
                <div className="caixa" id="caixa_venda">
                    <h2 className="titulo">Vendas Hoje</h2>
                    <p className="valor">R$ 5.000</p>
                </div>
                <div className="caixa" id="caixa_estoque">
                    <h2 className="titulo">Produtos em Estoque</h2>
                    <p className="valor">120 unid</p>
                </div>
            </div>
            <br />
            <div className="atalhos">
                <div className="caixa_atalho" id="consulta_estoque">
                    <img src="/img001_700.jpeg" alt="img_estoque" />
                    <Link to="/estoque">
                        <h2 className="titulo">Consultar Estoque</h2>
                    </Link>
                    <p className="consulta_conteudo">
                        Cadastre seu estoque na SaintBlue e controle facilmente a disponibilidade, entradas e saídas dos produtos com acesso rápido às informações. Descomplique sua rotina e ganhe mais tempo para focar no que realmente importa.
                    </p>
                </div>
                <div className="caixa_atalho" id="consulta_fornecedores">
                    <img src="/img003_700.jpg" alt="img_fornecedores" />
                    <Link to="/fornecedores">
                        <h2 className="titulo">Consultar Fornecedores</h2>
                    </Link>
                    <p className="consulta_conteudo">
                        No SaintBlue, a organização é a chave. Simplifique o controle dos seus fornecedores em um único lugar, com acesso rápido e intuitivo. Cadastre, atualize e monitore suas parcerias de forma prática e segura.
                    </p>
                </div>
                <div className="caixa_atalho" id="consulta_colaboradores">
                    <img src="/img004_700.jpg" alt="img_colaboradores" />
                    <Link to="/colaboradores">
                        <h2 className="titulo">Consultar Colaboradores</h2>
                    </Link>
                    <p className="consulta_conteudo">
                        No SaintBlue, você tem total controle sobre quem acessa o sistema. Gerencie facilmente os membros da sua equipe, ajustando permissões e telas de acesso conforme necessário. Mantenha a segurança e a eficiência no seu fluxo de trabalho.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Inicio;




