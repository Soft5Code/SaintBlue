import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../../components/Popup/Popup"; // Certifique-se de que o componente Popup está correto
import "./Sidebar.css";

function Sidebar() {
    const [photo, setPhoto] = useState(null);
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [endereco, setEndereco] = useState("");
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado para controlar a visibilidade da sidebar

    // Função para abrir o pop-up
    const openPopUp = () => setIsPopUpOpen(true);

    // Função para fechar o pop-up
    const closePopUp = () => setIsPopUpOpen(false);

    // Função para alternar a visibilidade da sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    // Função para submeter o formulário no pop-up
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ações de submissão do formulário, se necessário
    };

    return (
        
        
        <div>
            {/* Botão para alternar a sidebar */}
            <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
                {isSidebarOpen ? "⟨" : "⟩"} {/* Alterna o ícone de abertura/fechamento */}
            </button>

            <div class="menu">
                <i class="bi bi-list"></i>
                <i class="bi bi-x-lg"></i>
            </div>

            {/* Sidebar */}
            <div className={`barra-lateral ${isSidebarOpen ? "" : "mini_barra_lateral"}`}>
                <div className="nome-pagina">
                    <img src="/saint_500.png" alt="Menu_Toggle" id="menu_icon" />
                    <span className="txt_logo">SaintBlue</span>
                </div>

                {/* Navegação */}
                <nav className="navegacao">
                    <ul>
                        <li>
                            <Link to="/" className="active">
                                <i className="bi bi-house-door"></i>
                                <span className="txtNavegacao">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/estoque" className="active">
                                <i className="bi bi-boxes"></i>
                                <span className="txtNavegacao">Estoque</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/fornecedores" className="active">
                                <i className="bi bi-person-workspace"></i>
                                <span className="txtNavegacao">Fornecedores</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/colaboradores" className="active">
                                <i className="bi bi-file-earmark-person"></i>
                                <span className="txtNavegacao">Colaboradores</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Modo escuro */}
                <div className="modo_escuro">
                    <div className="info">
                        <i className="bi bi-moon"></i>
                        <span>Dark Theme</span>
                    </div>
                    <div className="switch">
                        <div className="base">
                            <div className="circulo"></div>
                        </div>
                    </div>
                </div>

                {/* Menu de sair */}
                <div className="sair">
                    <ul>
                        <li>
                            <Link to="#" className="active">
                                <i className="bi bi-box-arrow-left"></i>
                                <span className="btnSair">Sair</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Informação do usuário */}
                <div className="usuario">
                    <img
                        src="/263457215_5031922253486891_358383527080523036_n.jpg"
                        alt="Botão de Acesso"
                        className="open-popup-btn"
                        onClick={openPopUp}
                    />
                    <div className="info-usuario">
                        <div className="nome_telefone">
                            <span className="nome">Richard Gois</span>
                        </div>
                        <div>
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pop-up */}
            <Popup
                isOpen={isPopUpOpen}
                onClose={closePopUp}
                photo={photo}
                nome={nome}
                telefone={telefone}
                email={email}
                endereco={endereco}
                onSubmit={handleSubmit}
            />
        </div>
    );
}

export default Sidebar;
