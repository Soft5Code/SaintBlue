import React, { useState, useEffect, useRef } from 'react';
import styles from './Estoque.module.css';
import api from '../../services/api';
import Cubo from "../Inicio/Cubo";
import Swal from 'sweetalert2'; // Importando SweetAlert2
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa';  // Importando os ícones

const Estoque = () => {
  const [products, setProducts] = useState([
    { id: '001', name: 'Produto A', supplier: 'Fornecedor X', quantity: 100, price: 10, brand: 'Marca A', weight: 1.5, condition: 'Novo', color: 'Vermelho', notes: 'Observações A' },
    { id: '002', name: 'Produto B', supplier: 'Fornecedor Y', quantity: 50, price: 20, brand: 'Marca B', weight: 2, condition: 'Usado', color: 'Azul', notes: 'Observações B' },
    { id: '003', name: 'Produto C', supplier: 'Fornecedor Z', quantity: 15, price: 25, brand: 'Marca C', weight: 3, condition: 'Novo', color: 'Verde', notes: 'Observações C' },
    { id: '004', name: 'Produto D', supplier: 'Fornecedor W', quantity: 30, price: 30, brand: 'Marca D', weight: 1.8, condition: 'Novo', color: 'Amarelo', notes: 'Observações D' },
    { id: '005', name: 'Produto E', supplier: 'Fornecedor V', quantity: 12, price: 12, brand: 'Marca E', weight: 2.2, condition: 'Usado', color: 'Preto', notes: 'Observações E' },
    { id: '006', name: 'Produto F', supplier: 'Fornecedor U', quantity: 20, price: 18, brand: 'Marca F', weight: 1.9, condition: 'Novo', color: 'Branco', notes: 'Observações F' },
    { id: '007', name: 'Produto G', supplier: 'Fornecedor T', quantity: 10, price: 40, brand: 'Marca G', weight: 3, condition: 'Novo', color: 'Cinza', notes: 'Observações G' },
    { id: '008', name: 'Produto H', supplier: 'Fornecedor S', quantity: 25, price: 35, brand: 'Marca H', weight: 2.5, condition: 'Usado', color: 'Rosa', notes: 'Observações H' },
    { id: '009', name: 'Produto I', supplier: 'Fornecedor R', quantity: 60, price: 15, brand: 'Marca I', weight: 1.7, condition: 'Novo', color: 'Laranja', notes: 'Observações I' },
    { id: '010', name: 'Produto J', supplier: 'Fornecedor Q', quantity: 90, price: 28, brand: 'Marca J', weight: 2.8, condition: 'Novo', color: 'Azul Claro', notes: 'Observações J' },
  ]);
  /////////////////////////////////////////////API/////////////////////////////////////////////////////////
  const [produtos, setProdutos] = useState([])
  const navigate = useNavigate()
  const getProdutos = async() => {
    try{
        const response = await api.get('listar');

        const data = response.data

        setProdutos(data)
    } catch(error){
        console.log(error)
    }
  }

  useEffect(() => {
    getProdutos()
  }, [])

  async function handleDeleteProduct(codigo) {  
    try {
      setProdutos((prevProdutos) => prevProdutos.filter((produto) => produto.codigo !== codigo));
      await api.delete(`deletar/${codigo}`);
      console.log(`Produto com Código ${codigo} deletado com sucesso.`);
    } catch (error) {
      console.log(`Erro ao deletar produto com Código ${codigo}:`, error);
    }
  }

  /////////////////////////////////////////////API/////////////////////////////////////////////////////////

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ id: '', name: '', supplier: '', quantity: 0, price: 0, brand: '', weight: 0, condition: '', color: '', notes: '' });
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [productDropdowns, setProductDropdowns] = useState({});
   const [sortOrder, setSortOrder] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');
  
  const filterRef = useRef(null); // Definindo o filtroRef aqui

  const handleSort = (criteria) => {
    let sortedProducts;
    switch (criteria) {
      case 'A-Z':
        sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z-A':
        sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'QTD Cresc':
        sortedProducts = [...products].sort((a, b) => a.quantity - b.quantity);
        break;
      case 'QTD Desc':
        sortedProducts = [...products].sort((a, b) => b.quantity - a.quantity);
        break;
      default:
        sortedProducts = [...products];
    }
    setProducts(sortedProducts);
     setSortOrder(criteria);
  };

   useEffect(() => {
     if (selectedFilter) handleSort(selectedFilter);
   }, [selectedFilter]);

  const toggleFilterDropdown = () => {
    setFilterDropdownOpen((prev) => !prev);
  };

  const toggleProductDropdown = (productId) => {
    setProductDropdowns((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterSelect = (filter) => {
  setSelectedFilter(filter); // Isso automaticamente disparará o useEffect para ordenar
  setFilterDropdownOpen(false); // Fecha o dropdown
};

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true); // Abre o modal de edição
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.supplier.toLowerCase().includes(searchTerm.toLowerCase())
   );

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
    setIsAddModalOpen(false);
  };

  const handleAddProduct = () => {
    const newProductId = (parseInt(products[products.length - 1].id) + 1).toString().padStart(3, '0');
    setProducts([...products, { ...newProduct, id: newProductId }]);
    setNewProduct({ id: '', name: '', supplier: '', quantity: 0, price: 0, brand: '', weight: 0, condition: '', color: '', notes: '' });
    closeModal();

    Swal.fire({
      title: 'Produto Adicionado!',
      text: 'O produto foi adicionado com sucesso.',
      icon: 'success',
    });
  };

  const handleViewProduct = (product) => {
    Swal.fire({
      title: 'Detalhes do Produto',
      html: `        <p><strong>Nome:</strong> ${product.name}</p>
        <p><strong>Fornecedor:</strong> ${product.supplier}</p>
        <p><strong>Quantidade:</strong> ${product.quantity}</p>
        <p><strong>Preço:</strong> R$ ${product.price}</p>
        <p><strong>Marca:</strong> ${product.brand}</p>
        <p><strong>Peso:</strong> ${product.weight} kg</p>
        <p><strong>Condição:</strong> ${product.condition}</p>
        <p><strong>Cor:</strong> ${product.color}</p>
        <p><strong>Observações:</strong> ${product.notes}</p>
      `,
      icon: 'info',
    });
  };

  // Fechar o filtro ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setFilterDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  

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
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className={styles.filterSection} ref={filterRef}>
  <button
    className={styles.buttonFilter}
    id="filter"
    onClick={toggleFilterDropdown}
  >
    <i className="bi bi-funnel-fill"></i> Filtro
  </button>

  {filterDropdownOpen && (
    <div className={styles.menuFiltro}>
      <div className={styles.filtro}>
        <ul>
          <li>
            <Link
              className={`${styles.filterOption} ${selectedFilter === 'A-Z' ? styles.selected : ''}`}
              onClick={() => handleFilterSelect('A-Z')}
            >
              A-Z
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.filterOption} ${selectedFilter === 'Z-A' ? styles.selected : ''}`}
              onClick={() => handleFilterSelect('Z-A')}
            >
              Z-A
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.filterOption} ${selectedFilter === 'QTD Cresc' ? styles.selected : ''}`}
              onClick={() => handleFilterSelect('QTD Cresc')}
            >
              Cresc.
            </Link>
          </li>
          <li>
            <Link
              className={`${styles.filterOption} ${selectedFilter === 'QTD Desc' ? styles.selected : ''}`}
              onClick={() => handleFilterSelect('QTD Desc')}
            >
              Decresc.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )}
</div>

        <div className={styles.addSection}>
          <button className={styles.buttonPrimary} onClick={() => navigate('/createProduct')}>Cadastrar</button>
            
          
        </div>
      </div>

      {/* Tabela de produtos */}
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
  {produtos.map((produtos) => (
    <tr key={produtos.id}>
      <td>{produtos.codigo}</td>
      <td>{produtos.produto}</td>
      <td>{produtos.marca}</td>
      <td>{produtos.quantidade}</td>
      <td>
        <div className={styles.iconContainer}>
          <button
            onClick={() => handleViewProduct(produtos)}
            className={styles.dropdownItem}
          >
            <FaEye />
          </button>
          <button
             onClick={() => navigate(`/updateProduct/${produtos.codigo}`)}
            className={styles.dropdownItem}
          >
            <FaEdit />
          </button>
          <button
            onClick={() => handleDeleteProduct(produtos.codigo)}
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

      {isModalOpen && selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Editar Produto</h2>
            <label>ID:</label>
            <input
              type="text"
              value={selectedProduct.id}
              disabled
            />
            <label>Nome:</label>
            <input
              type="text"
              value={selectedProduct.name}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, name: e.target.value })}
            />
            <label>Fornecedor:</label>
            <input
              type="text"
              value={selectedProduct.supplier}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, supplier: e.target.value })}
            />
            <label>Quantidade:</label>
            <input
              type="number"
              value={selectedProduct.quantity}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, quantity: parseInt(e.target.value) })}
            />
            <label>Preço:</label>
            <input
              type="number"
              value={selectedProduct.price}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, price: parseFloat(e.target.value) })}
            />
            <label>Marca:</label>
            <input
              type="text"
              value={selectedProduct.brand}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, brand: e.target.value })}
            />
            <label>Peso:</label>
            <input
              type="number"
              value={selectedProduct.weight}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, weight: parseFloat(e.target.value) })}
            />
            <label>Condição:</label>
            <input
              type="text"
              value={selectedProduct.condition}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, condition: e.target.value })}
            />
            <label>Cor:</label>
            <input
              type="text"
              value={selectedProduct.color}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, color: e.target.value })}
            />
            <label>Observações:</label>
            <textarea
              value={selectedProduct.notes}
              onChange={(e) => setSelectedProduct({ ...selectedProduct, notes: e.target.value })}
            />
            <div className={styles.modalActions}>
              <button onClick={handleEditProduct}>Salvar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      {isAddModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Cadastrar Produto</h2>
            <label>Nome:</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <label>Fornecedor:</label>
            <input
              type="text"
              value={newProduct.supplier}
              onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
            />
            <label>Quantidade:</label>
            <input
              type="number"
              value={newProduct.quantity}
              onChange={(e) => setNewProduct({ ...newProduct, quantity: parseInt(e.target.value) })}
            />
            <label>Preço:</label>
            <input
              type="number"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
            />
            <label>Marca:</label>
            <input
              type="text"
              value={newProduct.brand}
              onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
            />
            <label>Peso:</label>
            <input
              type="number"
              value={newProduct.weight}
              onChange={(e) => setNewProduct({ ...newProduct, weight: parseFloat(e.target.value) })}
            />
            <label>Condição:</label>
            <input
              type="text"
              value={newProduct.condition}
              onChange={(e) => setNewProduct({ ...newProduct, condition: e.target.value })}
            />
            <label>Cor:</label>
            <input
              type="text"
              value={newProduct.color}
              onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
            />
            <label>Observações:</label>
            <textarea
              value={newProduct.notes}
              onChange={(e) => setNewProduct({ ...newProduct, notes: e.target.value })}
            />
            <div className={styles.modalActions}>
              <button onClick={handleAddProduct}>Cadastrar</button>
              <button onClick={closeModal}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Estoque;
