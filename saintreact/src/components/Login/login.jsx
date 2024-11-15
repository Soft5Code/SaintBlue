import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'; // Corrigido: importando React e hooks uma vez
import './login.css';


function Login() {
    // UseState para controlar se a classe 'active' está presente
    const [isActive, setIsActive] = useState(false);

    // Função para alternar para a página de registro
    const handleRegisterClick = () => {
        setIsActive(true);  // Adiciona a classe 'active'
    };

    // Função para alternar para a página de login
    const handleLoginClick = () => {
        setIsActive(false); // Remove a classe 'active'
    };

    useEffect(() => {
        // Adiciona a classe 'login-page' ao body ao renderizar o componente
        document.body.classList.add('login-page');

        // Remove a classe ao desmontar o componente
        return () => {
            document.body.classList.remove('login-page');
        };
    }, []); // O array vazio [] garante que o efeito só seja executado ao montar e desmontar

    return (
        <div className="login-container">
            <div className={`container ${isActive ? 'active' : ''}`} id="container">
                
                <div className="form-container cadastro">
                    <form action="https://webhook.site/ca2c3d16-6e28-4285-8dfc-e24450a3634a" method="post">
                        <h1>Cadastre-se</h1>
                        <input type="text" name="nome" id="nome" placeholder="Nome" size="25" required minLength="4" maxLength="15" />
                        <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" size="25" required minLength="4" maxLength="15" />
                        <input type="email" name="email" id="email" placeholder="E-mail" size="30" required minLength="3" maxLength="30" />
                        <input type="tel" name="telefone" id="telefone" size="25" placeholder="Numero" required />
                        <input type="password" name="senha" id="senha" placeholder="Senha" required minLength="8" maxLength="20" />
                        <input type="password" name="confirmarsenha" id="confirmarsenha" placeholder="Confirme sua senha" required minLength="8" maxLength="20" />
                        <button type="submit">Criar conta</button>
                    </form>
                </div>
        
                <div className="form-container llogin">
                    <form>
                        <h1>Login</h1>
                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                        <Link to="/">
                            <button type="button" id="entrarButton">Entrar</button>
                        </Link>
                    </form>
                </div>
        
                <div className="painel-container">
                    <div className="painel">
                        <div className="painel2 painel-esquerda">
                            <div className="logo1">
                                <img src="/s.png" alt="Logo SaintBlue" />
                            </div>
                            <h1>Bem-vindo(a)</h1>
                            <p>Já possui uma conta?</p>
                            <button className="hidden" onClick={handleLoginClick}>Fazer login</button>
                            <Link to="">
                                <button className="hidden2" id="acessohome">Home</button>
                            </Link>
                        </div>
                        <div className="painel2 painel-direita">
                            <div className="logo2">
                                <img src="/s.png" alt="Logo SaintBlue" />
                            </div>
                            <h1>Bem-vindo(a)</h1>
                            <p>Já possui uma conta?</p>
                            <button className="hidden" onClick={handleRegisterClick}>Criar conta</button>
                            <Link to="">
                                <button className="hidden2" id="acessohome2">Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
{}