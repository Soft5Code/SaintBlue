import React, { useState } from 'react';
import styles from './Estoque.module.css';

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
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setActiveDropdown(null);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts(products.filter((product) => product.id !== productId));
    }
    setActiveDropdown(null);
  };

  const toggleDropdown = (productId) => {
    setActiveDropdown(activeDropdown === productId ? null : productId);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.actionsBar}>
        <input
          type="text"
          placeholder="Busca Rápida"
          className={styles.searchInput}
        />
        <button className={styles.buttonPrimary}>Cadastrar</button>
        <button className={styles.buttonFilter}>
          <i className="bi bi-funnel-fill"></i>
        </button>
      </div>
      <table className={styles.productTable}>
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
                <div
                  className={`${styles.dropdown} ${
                    activeDropdown === product.id ? styles.open : ''
                  }`}
                >
                  <button
                    className={styles.dropdownButton}
                    onClick={() => toggleDropdown(product.id)}
                  >
                    Menu ▼
                  </button>
                  {activeDropdown === product.id && (
                    <div className={styles.dropdownContent}>
                      <button
                        onClick={() => handleEdit(product)}
                        className={styles.dropdownItem}
                      >
                        Editar ✎
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className={`${styles.dropdownItem} ${styles.danger}`}
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

      {isModalOpen && selectedProduct && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
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
              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.button}
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className={styles.buttonPrimary}
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
