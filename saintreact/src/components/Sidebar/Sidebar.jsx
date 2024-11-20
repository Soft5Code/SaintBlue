import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Importação correta
import Popup from "../../components/Popup/Popup";

import "./Sidebar.css";
import Switch from "./Switch";

function Sidebar() {
    const [usuario, setUsuario] = useState({ nome: "", foto: "" });
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Hook useLocation para obter a localização atual da URL
    const location = useLocation(); // Agora você está usando o useLocation aqui no componente

    // Função para abrir o pop-up
    const openPopUp = () => setIsPopUpOpen(true);

    // Função para alternar a visibilidade da sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen((prevState) => !prevState);
    };

    // Garantir que a sidebar esteja sempre visível em telas grandes
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsSidebarOpen(true);
            }
        };
        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Buscar dados do usuário logado
    useEffect(() => {
        const fetchUsuario = async () => {
            try {
                const response = await fetch("http://seu-backend.com/usuario/me", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`, // Token de autenticação
                    },
                });

                if (!response.ok) throw new Error("Erro ao buscar dados do usuário");

                const data = await response.json();
                setUsuario({
                    nome: data.nome || "Usuário",
                    foto: data.foto ||  "/saint_500.png",
                });
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            }
        };

        fetchUsuario();
    }, []);

    // Persistir o estado do modo escuro no localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem("isDarkMode");
        if (savedMode === "true") {
            setIsDarkMode(true);
        }
    }, []);

    // Alternar entre os modos claro e escuro
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
        localStorage.setItem("isDarkMode", isDarkMode);
    }, [isDarkMode]);

    // Função para alternar o modo escuro
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
                {isSidebarOpen ? (
                    <i className="bi bi-x"></i>
                ) : (
                    <i className="bi bi-list"></i>
                )}
            </button>

            <div className={`barra-lateral ${isSidebarOpen ? "" : "mini_barra_lateral"}`}>
                <div className="nome-pagina">
                    <img src="/saint_500.png" alt="Menu_Toggle" id="menu_icon" />
                    <span className="txt_logo">SaintBlue</span>
                </div>

                {/* Navegação */}
                <nav className="navegacao">
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                <i className="bi bi-house-door"></i>
                                <span className="txtNavegacao">Inicio</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/estoque" className={location.pathname === '/estoque' ? 'active' : ''}>
                                <i className="bi bi-boxes"></i>
                                <span className="txtNavegacao">Estoque</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/fornecedores" className={location.pathname === '/fornecedores' ? 'active' : ''}>
                                <i className="bi bi-person-workspace"></i>
                                <span className="txtNavegacao">Fornecedores</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/colaboradores" className={location.pathname === '/colaboradores' ? 'active' : ''}>
                                <i className="bi bi-file-earmark-person"></i>
                                <span className="txtNavegacao">Colaboradores</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Modo escuro */}
                <div className="modo_escuro">
                    <div className="info">
                        <i className={`bi ${isDarkMode ? 'bi-moon' : 'bi-sun'}`}></i>
                        <span className="infoTxt">Dark Mode</span>
                    </div>
                    <Switch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </div>

                {/* Menu de sair */}
                <div className="sair">
                    <ul>
                        <li>
                            <Link to="./Login" className="active">
                                <i className="bi bi-box-arrow-left"></i>
                                <span className="btnSair">Sair</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Informação do usuário */}
                <div className="usuario">
                    <img
                        src={usuario.foto}
                        alt="Foto do Usuário"
                        className="open-popup-btn"
                        onClick={openPopUp}
                    />
                    <div className="info-usuario">
                        <div className="nome_telefone">
                            <span className="nome">{usuario.nome}</span>
                        </div>
                        <div>
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pop-up */}
            <Popup isOpen={isPopUpOpen} onClose={() => setIsPopUpOpen(false)} />
        </div>
    );
}

export default Sidebar;
