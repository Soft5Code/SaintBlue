import React, { useState } from 'react';
import './Estoque.css';

const Estoque = () => {
  const [products, setProducts] = useState([
    { id: '001', name: 'Produto A', supplier: 'Fornecedor X', quantity: 100 },
    { id: '002', name: 'Produto B', supplier: 'Fornecedor Y', quantity: 50 },
    { id: '003', name: 'Produto C', supplier: 'Fornecedor Z', quantity: 200 },
    { id: '004', name: 'Produto D', supplier: 'Fornecedor W', quantity: 150 },
    { id: '005', name: 'Produto E', supplier: 'Fornecedor V', quantity: 300 },
    { id: '006', name: 'Produto F', supplier: 'Fornecedor U', quantity: 75 },
    { id: '007', name: 'Produto G', supplier: 'Fornecedor T', quantity: 90 },
    { id: '008', name: 'Produto H', supplier: 'Fornecedor S', quantity: 60 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null); // Controla qual dropdown está aberto

  // Função para abrir o modal de edição
  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setActiveDropdown(null); // Fecha o dropdown após editar
  };

  // Função para deletar produto
  const handleDelete = (productId) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts(products.filter((product) => product.id !== productId));
    }
    setActiveDropdown(null); // Fecha o dropdown após excluir
  };

  // Função para alternar a visibilidade do dropdown
  const toggleDropdown = (productId) => {
    setActiveDropdown(activeDropdown === productId ? null : productId); // Toggle (abre/fecha) o dropdown
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className="table-container">
      <div className="actions-bar">
        <input type="text" placeholder="Busca Rápida" className="search-input" />
        <button className="button primary">Cadastrar</button>
        <button className="button filter">
          <i className="bi bi-funnel-fill"></i>
        </button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Fornecedor</th>
            <th>QTD</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.supplier}</td>
              <td>{product.quantity}</td>
              <td>
                <div className="dropdown">
                  <button
                    className="dropdown-button"
                    onClick={() => toggleDropdown(product.id)} // Chama a função para abrir/fechar o dropdown
                  >
                    Menu ▼
                  </button>
                  {activeDropdown === product.id && (
                    <div className="dropdown-content">
                      <button
                        onClick={() => handleEdit(product)}
                        className="dropdown-item"
                      >
                        Editar ✎
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="dropdown-item danger"
                      >
                        Excluir 🗑️
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal de edição */}
      {isModalOpen && selectedProduct && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Editar Produto</h2>
            <form>
              <div>
                <label>ID:</label>
                <input type="text" value={selectedProduct.id} disabled />
              </div>
              <div>
                <label>Nome:</label>
                <input
                  type="text"
                  value={selectedProduct.name}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Fornecedor:</label>
                <input
                  type="text"
                  value={selectedProduct.supplier}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      supplier: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label>Quantidade:</label>
                <input
                  type="number"
                  value={selectedProduct.quantity}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      quantity: e.target.value,
                    })
                  }
                />
              </div>
              <div className="modal-actions">
                <button
                  type="button"
                  className="button"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="button primary"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log('Produto atualizado:', selectedProduct);
                    closeModal();
                  }}
                >
                  Salvar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Estoque;
