
import { Form } from '../../components/Form/form';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import styles from  './updatepro.module.css';

export function UpdateProduto() {
  const navigate = useNavigate();
  const { codigo } = useParams(); // Corrigido: agora useParams é chamado corretamente

  async function handleUpdatePost(data) {
    try {
      // Envia a requisição para atualizar o produto
      const response = await api.put(`editar/${codigo}`, data);

      // Confirmação de sucesso (opcional)
      console.log('Produto atualizado com sucesso:', response.data);

      // Redireciona para a página de estoque
      navigate('/estoque');
    } catch (error) {
      // Tratamento de erro caso a requisição falhe
      console.error('Erro ao atualizar produto:', error);
      alert('Não foi possível atualizar o produto. Tente novamente.');
    }
  }

  return (
    <div className={styles.container}>
      <Form title="Editar Produto" textButton="Editar" onAction={handleUpdatePost} />
    </div>
  );
}

export default UpdateProduto