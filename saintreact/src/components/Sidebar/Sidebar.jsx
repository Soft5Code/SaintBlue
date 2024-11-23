import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Popup from "../../components/Popup/Popup";

import styles from '../Sidebar/Sidebar.module.css';
import Switch from "./Switch";

function Sidebar() {
    const [usuario, setUsuario] = useState({ nome: "", foto: "" });
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);

   

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
                    foto: data.foto || "http://localhost:3000/saint_500.png", // Verifica se a string não é vazia
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
            <button className={styles.toggleSidebarBtn} onClick={toggleSidebar}>
                {isSidebarOpen ? (
                    <i className="bi bi-x"></i>
                ) : (
                    <i className="bi bi-list"></i>
                )}
            </button>

            <div className={`${styles.barraLateral} ${isSidebarOpen ? "" : styles.miniBarraLateral}`}>
                <div className={styles.nomePagina}>
                    <img src="/saint_500.png" alt="Menu_Toggle" id="menu_icon" />
                    <span className={styles.txtLogo}>SaintBlue</span>
                </div>

                {/* Navegação */}
                <aside className={styles.navegacao}>
                    <ul>
                        <li>
                            <NavLink
                                to="/inicio"
                                className={({ isActive }) => 
                                    `${styles.txtNavegacao} ${isActive ? styles.active : ''}`
                                }
                            >
                                <i className="bi bi-house-door"></i>
                                <span>Inicio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/estoque"
                                className={({ isActive }) => 
                                    `${styles.txtNavegacao} ${isActive ? styles.active : ''}`
                                }
                            >
                                <i className="bi bi-boxes"></i>
                                <span>Estoque</span>
                            </NavLink>
                        </li>
                        {/*
                        <li>
                            <NavLink
                                to="/fornecedores"
                                className={({ isActive }) => 
                                    `${styles.txtNavegacao} ${isActive ? styles.active : ''}`
                                }
                            >
                                <i className="bi bi-person-workspace"></i>
                                <span>Fornecedores</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/colaboradores"
                                className={({ isActive }) => 
                                    `${styles.txtNavegacao} ${isActive ? styles.active : ''}`
                                }
                            >
                                <i className="bi bi-file-earmark-person"></i>
                                <span>Colaboradores</span>
                            </NavLink>
                        </li>
                        */}
                    </ul>
                </aside>


                {/* Modo escuro */}
                <div className={styles.modoEscuro}>
                    <div className={styles.info}>
                        <i className={`bi ${isDarkMode ? 'bi-moon' : 'bi-sun'}`}></i>
                        <span className={styles.infoTxt}>Dark Mode</span>
                    </div>
                    <Switch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                </div>

                {/* Menu de sair */}
                <div className={styles.sair}>
                    <ul>
                        <li>
                            <Link to="./Login" className={styles.active}>
                                <i className="bi bi-box-arrow-left"></i>
                                <span className={styles.btnSair}>Sair</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Informação do usuário */}
                <div className={styles.usuario}>
                    <img
                        src={usuario.foto}
                        alt="Foto do Usuário"
                        className={styles.openPopupBtn}
                        onClick={openPopUp}
                    />
                    <div className={styles.infoUsuario}>
                        <div className={styles.nomeTelefone}>
                            <span className={styles.nome}>{usuario.nome}</span>
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
