import { Link } from "react-router-dom";
import React from 'react';

import './Filtro.css';


function Filtro() {
    return (
        <div class="buscar">
            <div class="search_box">
                <input class="search_txt" type="text" name="#" placeholder="Busca Rápida"/>
                <Link class="search_btn" href="#">
                    <i class="bi bi-search"></i> </Link>
            </div>
            <button type="button" class="button" id="button_cadastrar">
                <span class="button__text">Cadastrar</span>
                <i class="bi bi-plus-circle"></i>
            </button>
            
            <dialog>
                <button class="close-button" id="close-button">&times;</button>
                <div class="form">
                    <form action="https://webhook.site/ca2c3d16-6e28-4285-8dfc-e24450a3634a" method="post" autocomplete="on">               
                        <div class="form-header">
                            <div class="title">
                                <h1>CADASTRO DE PRODUTOS:</h1>
                            </div>
                        </div> 
                        
                        <label class="photo-upload1" for="product-image1">
                            <i class="bi bi-person-bounding-box"></i>Foto do Produto
                        </label>
                        <input type="file" id="product-image1" name="product-image1" accept="image/*" required/>
            
                        
                        <div class="input-group">
                            <div class="input-box">
                                <div class="produto">
                                    <label for="produto">Produto:</label>
                                    <textarea id="produto" name="produto" required></textarea>
                                </div>
                            </div>
                            
                            <div class="input-box">
                                <div class="preço">
                                    <label for="preço">Preço:</label>
                                    <input type="number" id="preço" name="preço" step="0.01" min="0" required/>
                                </div>
                            </div>
            
                            <div class="input-box">
                                <div class="fileira">
                                    <label for="marca">Marca:</label>
                                    <textarea id="marca" name="marca" required></textarea>
                                </div>
                            </div>
                            
                            <div class="input-box">
                                <div class="fileira">
                                    <label for="cor">Cor:</label>
                                    <textarea id="cor" name="cor" required></textarea>
                                </div>
                            </div>
                            
                            <div class="input-box">
                                <div class="fileira">
                                    <label for="codigo">Código:</label>
                                    <textarea id="codigo" name="codigo" required></textarea>
                                </div>
                            </div>
                            
                            <div class="input-box">
                                <div class="fileira">
                                    <label for="quantidade">Quantidade:</label>
                                    <input type="number" id="quantidade" name="quantidade" min="1" required/>
                                </div>
                            </div>
                            
                            <div class="input-box">
                                <div class="fileira">
                                    <label for="condição">Condição:</label>
                                    <textarea id="condição" name="condição" required></textarea>
                                </div>
                            </div>
                            
                            <div class="input-box">
                                <div class="fileira">
                                    <label for="peso">Peso (KG):</label>
                                    <input type="number" id="peso" name="peso" step="0.01" min="0" required/>
                                </div>
                            </div>
                        
                            <div class="input-box">
                                <div class="obs">
                                    <label for="obs">Observações:</label>
                                    <textarea id="obs" name="obs" rows="4"></textarea>
                                </div>
                            </div>
                        </div>  
                    </form>
                </div>
                <button id="dialogbutton">CONCLUIR</button> 
            </dialog>

            <button class="bin-button">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 39 7"
                class="bin-top"
            >
                <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
                <line
                stroke-width="3"
                stroke="white"
                y2="1.5"
                x2="26.0357"
                y1="1.5"
                x1="12"
                ></line>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 33 39"
                class="bin-bottom"
            >
                <mask fill="white" id="path-1-inside-1_8_19">
                <path
                    d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                ></path>
                </mask>
                <path
                mask="url(#path-1-inside-1_8_19)"
                fill="white"
                d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                ></path>
                <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
                <path stroke-width="4" stroke="white" d="M21 6V29"></path>
            </svg>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 89 80"
                class="garbage"
            >
                <path
                fill="white"
                d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                ></path>
            </svg>
            </button>
            
            <div class="filtro">
                <i id="filter" class="bi bi-funnel-fill" onclick="clickMenu()"></i>
                <div class="menu_filtro" id="menuFiltro">
                    <ul>
                        <li><Link href="#" id="codigoOption" onclick="selectOption(this)">Código</Link></li>
                        <li><Link href="#" id="produtoOption" onclick="selectOption(this)">Produto</Link></li>
                        <li><Link href="#" id="fornecedorOption" onclick="selectOption(this)">Fornecedor</Link></li>
                        <li><Link href="#" id="quantidadeOption" onclick="selectOption(this)">Quantidade</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Filtro;