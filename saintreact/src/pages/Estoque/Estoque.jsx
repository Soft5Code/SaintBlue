import React, { useState, useEffect } from 'react';
import styles from './Estoque.module.css';
import api from '../../services/api';
import Cubo from "../Inicio/Cubo";
import Swal from 'sweetalert2'; // Importando SweetAlert2
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';  // Importando os ícones

const Estoque = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  // Função para buscar produtos da API
  const getProdutos = async () => {
    try {
      const response = await api.get('listar');
      const data = response.data;
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um erro ao buscar os produtos.',
        icon: 'error',
      });
    }
  };

  useEffect(() => {
    getProdutos();
  }, []);

  // Função para deletar um produto
  const handleDeleteProduct = async (codigo) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Essa ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Remove o produto localmente antes de chamar a API
          setProdutos((prevProdutos) =>
            prevProdutos.filter((produto) => produto.codigo !== codigo)
          );

          // Chama a API para deletar
          await api.delete(`deletar/${codigo}`);

          // Exibe alerta de sucesso
          Swal.fire({
            title: 'Deletado!',
            text: `Produto com Código ${codigo} foi deletado com sucesso.`,
            icon: 'success',
            confirmButtonText: 'OK',
          });
        } catch (error) {
          console.error(`Erro ao deletar produto com Código ${codigo}:`, error);
          Swal.fire({
            title: 'Erro!',
            text: 'Não foi possível deletar o produto. Tente novamente.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      }
    });
  };

  // Função para visualizar os detalhes de um produto
  const handleViewProduct = (produto) => {
    const preco = parseFloat(produto.preco); // Garante que `preco` é um número
    Swal.fire({
      title: 'Detalhes do Produto',
      html: `
        <p><strong>Nome:</strong> ${produto.produto}</p>
        <p><strong>Preço:</strong> ${
          !isNaN(preco) ? `R$ ${preco.toFixed(2)}` : 'Preço indisponível'
        }</p>
        <p><strong>Marca:</strong> ${produto.marca}</p>
        <p><strong>Cor:</strong> ${produto.cor}</p>
        <p><strong>Código:</strong> ${produto.codigo}</p>
        <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
        <p><strong>Condição:</strong> ${produto.condicao}</p>
        <p><strong>Peso:</strong> ${produto.peso} kg</p>
        <p><strong>Observações:</strong> ${
          produto.observacoes || 'Sem observações'
        }</p>
      `,
      icon: 'info',
    });
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.Title}>
        <Cubo />
        <h1 className={styles.pageTitle}>Gestão de Estoque</h1>
      </div>
      <div className={styles.actionsBar}>
        <div className={styles.searchSection}>
          <input
            type="text"
            placeholder="Busca Rápida"
            className={styles.searchInput}
            onChange={(e) => {
              const searchValue = e.target.value.toLowerCase();
              if (searchValue.trim() === '') {
                getProdutos(); // Reseta para todos os produtos
              } else {
                setProdutos((prevProdutos) =>
                  prevProdutos.filter((produto) =>
                    produto.produto.toLowerCase().includes(searchValue)
                  )
                );
              }
            }}
          />
        </div>
        <div className={styles.addSection}>
          <button
            className={styles.buttonPrimary}
            onClick={() => navigate('/createProduct')}
          >
            Cadastrar
          </button>
        </div>
      </div>

      {/* Tabela de produtos */}
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Marca</th>
            <th>QTD</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.codigo}>
              <td>{produto.codigo}</td>
              <td>{produto.produto}</td>
              <td>{produto.marca}</td>
              <td>{produto.quantidade}</td>
              <td>
                <div className={styles.iconContainer}>
                  <button
                    onClick={() => handleViewProduct(produto)}
                    className={styles.dropdownItem}
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => navigate(`/updateProduct/${produto.codigo}`)}
                    className={styles.dropdownItem}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(produto.codigo)}
                    className={`${styles.dropdownItem} ${styles.danger}`}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estoque;
