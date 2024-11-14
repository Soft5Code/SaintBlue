import { Link } from "react-router-dom";
import React, { useState } from 'react';

import './Sidebar.css';
import Popup from '../../components/Popup/Popup';

function Sidebar() {
    const [photo, setPhoto] = useState(null);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [isPopUpOpen, setIsPopUpOpen] = useState(false); 

    const openPopUp = () => setIsPopUpOpen(true);
    const closePopUp = () => setIsPopUpOpen(false);


    const handleSubmit = async () => {
        const data = {
            photo,
            nome,
            telefone,
            email,
            endereco,
        };

        try {
            const response = await fetch('API_URL_AQUI', { // URL da API para substituir depois
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("Dados salvos com sucesso");
                closePopUp();
            } else {
                console.error("Erro ao salvar os dados");
            }
        } catch (error) {
            console.error("Erro de conexão com o servidor", error);
        }
    };

    return (
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
                            <Link to="/estoque" rel="next" target="_self">
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
                            <div className="circulo"></div>
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
                    <img 
                        src="/263457215_5031922253486891_358383527080523036_n.jpg" 
                        alt="Botão de Acesso" 
                        className="open-popup-btn" 
                        onClick={openPopUp}
                    />
                    {isPopUpOpen && (
                        <Popup
                            isOpen={isPopUpOpen}
                            onClose={closePopUp}
                            onSubmit={handleSubmit}
                            photo={photo}
                            setPhoto={setPhoto}
                            nome={nome}
                            setNome={setNome}
                            telefone={telefone}
                            setTelefone={setTelefone}
                            email={email}
                            setEmail={setEmail}
                            endereco={endereco}
                            setEndereco={setEndereco}
                        />
                    )}
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
    );
}

export default Sidebar;
