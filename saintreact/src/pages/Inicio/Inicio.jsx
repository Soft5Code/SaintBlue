import { Link } from "react-router-dom";
import styles from '../Inicio/Inicio.module.css';

function Inicio() {
    return (
        <main className={styles.main}>
            <div className={styles.bemVindo}>
                <p>Olá Richard Castro. Seja bem-vindo(a) !</p>
            </div>
            <div className={styles.container}>
                <h1 className={styles.aba}>Inicio</h1>
            </div>
            <div>
                <div className={styles.linhaMain}></div>
            </div>
            <div className={styles.cards}>
                <div className={styles.caixa} id="caixa_faturamento">
                    <h2 className={styles.titulo}>Faturamento 2024</h2>
                    <p className={styles.valor}>R$ 10.000</p>
                </div>
                <div className={styles.caixa} id="caixa_venda">
                    <h2 className={styles.titulo}>Vendas Hoje</h2>
                    <p className={styles.valor}>R$ 5.000</p>
                </div>
                <div className={styles.caixa} id="caixa_estoque">
                    <h2 className={styles.titulo}>Produtos em Estoque</h2>
                    <p className={styles.valor}>120 unid</p>
                </div>
            </div>
            <br />
            <div className={styles.atalhos}>
                <div className={styles.caixaAtalho} id="consulta_estoque">
                    <img src="/img001_700.jpeg" alt="img_estoque" />
                    <Link to="/estoque">
                        <h2 className={styles.titulo}>Consultar Estoque</h2>
                    </Link>
                    <p className={styles.consultaConteudo}>
                        Cadastre seu estoque na SaintBlue e controle facilmente a disponibilidade, entradas e saídas dos produtos com acesso rápido às informações. Descomplique sua rotina e ganhe mais tempo para focar no que realmente importa.
                    </p>
                </div>
                <div className={styles.caixaAtalho} id="consulta_fornecedores">
                    <img src="/img003_700.jpg" alt="img_fornecedores" />
                    <Link to="/fornecedores">
                        <h2 className={styles.titulo}>Consultar Fornecedores</h2>
                    </Link>
                    <p className={styles.consultaConteudo}>
                        No SaintBlue, a organização é a chave. Simplifique o controle dos seus fornecedores em um único lugar, com acesso rápido e intuitivo. Cadastre, atualize e monitore suas parcerias de forma prática e segura.
                    </p>
                </div>
                <div className={styles.caixaAtalho} id="consulta_colaboradores">
                    <img src="/img004_700.jpg" alt="img_colaboradores" />
                    <Link to="/colaboradores">
                        <h2 className={styles.titulo}>Consultar Colaboradores</h2>
                    </Link>
                    <p className={styles.consultaConteudo}>
                        No SaintBlue, você tem total controle sobre quem acessa o sistema. Gerencie facilmente os membros da sua equipe, ajustando permissões e telas de acesso conforme necessário. Mantenha a segurança e a eficiência no seu fluxo de trabalho.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Inicio;




