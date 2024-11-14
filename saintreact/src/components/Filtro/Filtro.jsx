import { Link } from "react-router-dom";
import React from 'react';

import './Filtro.css';


function Filtro() {
    return (
        <div class="buscar">
            <div class="search_box">
                <input class="search_txt" type="text" name="#" placeholder="Busca Rápida"/>
                <a class="search_btn" href="#">
                    <i class="bi bi-search"></i> </a>
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
            
            <div class="filtro">
                <i id="filter" class="bi bi-funnel-fill" onclick="clickMenu()"></i>
                <div class="menu_filtro" id="menuFiltro">
                    <ul>
                        <li><a href="#" id="codigoOption" onclick="selectOption(this)">Código</a></li>
                        <li><a href="#" id="produtoOption" onclick="selectOption(this)">Produto</a></li>
                        <li><a href="#" id="fornecedorOption" onclick="selectOption(this)">Fornecedor</a></li>
                        <li><a href="#" id="quantidadeOption" onclick="selectOption(this)">Quantidade</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Filtro;