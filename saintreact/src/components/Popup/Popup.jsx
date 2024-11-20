import React, { useState } from 'react';
import { CSSTransition } from "react-transition-group";

import "./modalTransitions.css";
import styles from './Popup.module.css';

function Popup({
    isOpen,
    onClose,
    onSubmit,
    photo,
    setPhoto,
    nome,
    setNome,
    telefone,
    setTelefone,
    email,
    setEmail,
    endereco,
    setEndereco,
}) {
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPhoto(file); // Atualiza a foto de perfil no estado
    };

    const handleSubmit = async () => {
        try {
            // Criação do objeto FormData para enviar os dados incluindo a foto
            const formData = new FormData();
            if (photo) formData.append("photo", photo);
            formData.append("nome", nome);
            formData.append("telefone", telefone);
            formData.append("email", email);
            formData.append("endereco", endereco);

            const response = await fetch("http://seu-backend.com/usuario", {
                method: "PUT", // Atualiza os dados
                body: formData, // Envia o FormData
            });

            if (!response.ok) throw new Error("Erro ao atualizar os dados do usuário");

            alert("Perfil atualizado com sucesso!");
            onSubmit(); // Fecha o popup ou executa ações adicionais
        } catch (error) {
            console.error("Erro ao atualizar o perfil:", error);
            alert("Houve um erro ao atualizar o perfil.");
        }
    };

    // Requisição para buscar os dados do usuário ao abrir o popup
    const fetchUserDetails = async () => {
        try {
            const response = await fetch("http://seu-backend.com/usuario");
            if (!response.ok) throw new Error("Erro ao buscar os dados do usuário");

            const data = await response.json();
            setNome(data.nome || "");
            setTelefone(data.telefone || "");
            setEmail(data.email || "");
            setEndereco(data.endereco || "");
            setPhoto(null); 
        } catch (error) {
            console.error("Erro ao buscar os dados do usuário:", error);
        }
    };

    // Carrega os dados do usuário quando o popup abre
    React.useEffect(() => {
        if (isOpen) fetchUserDetails();
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <CSSTransition
            in={isOpen}
            timeout={300}
            classNames="modal"
            unmountOnExit // Remove o modal do DOM quando fechado
        >
            <div className={styles.popupOverlay}>
                <div className={styles.popupContent}>
                    {/* Botão para fechar o pop-up */}
                    <span className={styles.closePopup} onClick={onClose}>
                        &times;
                    </span>

                    {/* Conteúdo do pop-up */}
                    <div className={styles.popupHeader}>
                        <h2>Perfil</h2>
                    </div>
                    <div className={styles.perfil}>
                        <div className={styles.form}>
                            <label className={styles.photoUpload} htmlFor="product-image">
                                <i className="bi bi-person-bounding-box"></i> Foto de Perfil
                            </label>
                            <input className={styles.popupInput}
                                type="file"
                                id="product-image"
                                name="product-image"
                                accept="image/*"
                                onChange={handleFileChange}
                            />

                            <div className={styles.informacoes}>
                                <h2>Nome:</h2>
                                <input className={styles.popupInput}
                                    type="text"
                                    placeholder="Nome"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />

                                <h2>Tel.:</h2>
                                <input className={styles.popupInput}
                                    type="text"
                                    placeholder="Tel."
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />

                                <h2>E-mail:</h2>
                                <input className={styles.popupInput}
                                    type="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <h2>Endereço:</h2>
                                <input className={styles.popupInput}
                                    type="text"
                                    placeholder="End."
                                    value={endereco}
                                    onChange={(e) => setEndereco(e.target.value)}
                                />
                            </div>

                            <div className={styles.btn}>
                                <button className={styles.btnTxt} onClick={handleSubmit}>
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
