import { Link } from "react-router-dom";
import './index.css';

function Sidebar(){
    return(
        <div>
            <div className="menu">
                <i className="bi bi-list"></i>
                <i className="bi bi-x-lg"></i>
            </div>
            <div className="barra-lateral">
                <div>
                    <div className="nome-pagina">
                        <img src="/saint_500.png" alt="Menu_Toggle" id="menu_icon"/>
                        <span className="txt_logo">SaintBlue</span>
                    </div>
                </div>
                <nav className="navegacao">
                    <ul>
                        <li>
                            <Link to="/" rel="next" target="_self" className="active">
                                <i className="bi bi-house-door"></i>
                                <span className="txtNavegacao">Inicio</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/estoque" rel="next"  target="_self">
                                <i className="bi bi-boxes"></i>
                                <span className="txtNavegacao">Estoque</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/fornecedores" rel="next" target="_self">
                                <i className="bi bi-person-workspace"></i>
                                <span className="txtNavegacao">Fornecedores</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/colaboradores" rel="next" target="_self">
                                <i className="bi bi-file-earmark-person"></i>
                                <span className="txtNavegacao">Colaboradores</span>
                            </Link>
                        </li>               
                    </ul>
                </nav>
                <hr className="line"/>
                <div className="modo_escuro">
                    <div className="info">
                        <i className="bi bi-moon"></i>
                        <span>Dark Theme</span>
                    </div>
                    <div className="switch">
                        <div className="base">
                            <div className="circulo">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sair">
                    <ul>
                        <li>
                            <Link to="#" rel="next" target="_self">
                                <i className="bi bi-box-arrow-left"></i>
                                <span className="btnSair">Sair</span>
                            </Link>
                        </li>
                    </ul>
                </div>    
                <div className="usuario">
                    <img src="/263457215_5031922253486891_358383527080523036_n.jpg" alt="Botão de Acesso" className="open-popup-btn" onclick="openPopup()"/>
                    <div className="info-usuario">
                        <div className="nome_telefone">
                            <span className="nome">Richard Gois</span>
                        </div>
                        <div>
                            <i className="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;