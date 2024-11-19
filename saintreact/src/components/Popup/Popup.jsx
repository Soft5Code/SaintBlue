import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";
import "./modalTransitions.css";
import './Popup.css';

function Popup({ isOpen, onClose, onSubmit, photo, setPhoto, nome, setNome, telefone, setTelefone, email, setEmail, endereco, setEndereco }) {
    const handleFileChange = (event) => {
        setPhoto(event.target.files[0]); // Atualiza a foto de perfil
    };

    const handleSubmit = () => {
        // Aqui você pode fazer algo como enviar os dados para um servidor
        console.log({
            nome,
            telefone,
            email,
            endereco,
            photo
        });
        alert('Perfil alterado com sucesso!');
        onSubmit(); // Chama o onSubmit para fechar o pop-up ou outras ações.
    };

    if (!isOpen) return null; // Não renderiza o pop-up se não estiver aberto

    return (
        <CSSTransition
        in={isOpen} // Controla a exibição
        timeout={3000} // Duração da transição
        classNames="modal" // Prefixo para classes de transição
        unmountOnExit // Remove o modal do DOM quando fechado
        >

        <div className="popup-overlay">
            <div className="popup-content">
                {/* Botão para fechar o pop-up */}
                <span className="close-popup" onClick={onClose}>&times;</span>

                {/* Conteúdo do pop-up */}
                <div className="popup-header">
                    <h2>Perfil</h2>
                </div>
                <div className="perfil">
                    <div className="form">
                        <label className="photo-upload" htmlFor="product-image">
                            <i className="bi bi-person-bounding-box"></i> Foto de Perfil
                        </label>
                        <input
                            type="file"
                            id="product-image"
                            name="product-image"
                            accept="image/*"
                            required
                            onChange={handleFileChange}
                        />

                        <div className="informacoes">
                            <h2>Nome:</h2>
                            <input
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />

                            <h2>Tel.:</h2>
                            <input
                                type="text"
                                placeholder="Tel."
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            />

                            <h2>E-mail:</h2>
                            <input
                                type="email"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <h2>Endereço:</h2>
                            <input
                                type="text"
                                placeholder="End."
                                value={endereco}
                                onChange={(e) => setEndereco(e.target.value)}
                            />
                        </div>

                        <div className="btn">
                            <button className="btn_txt" onClick={handleSubmit}>
                                Alterar Perfil
                            </button>
                        </div>
                    </div> {/* Fechamento da div form */}
                </div> {/* Fechamento da div perfil */}
            </div> {/* Fechamento da div popup-content */}
        </div>
        </CSSTransition>
    );
}

export default Popup;
