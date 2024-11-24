import Swal from 'sweetalert2';
import { Form } from '../../components/Form/form';
import api from '../../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './updatepro.module.css';

export function UpdateProduto() {
    const navigate = useNavigate();
    const { codigo } = useParams(); // Obtém o código do produto a ser editado

    async function handleUpdatePost(data) {
        try {
            // Envia a requisição para atualizar o produto
            const response = await api.put(`editar/${codigo}`, data);

            // Exibe o alerta de sucesso se a atualização for bem-sucedida
            Swal.fire({
                title: 'Sucesso!',
                text: 'Produto atualizado com sucesso!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Redireciona para a página de estoque após fechar o alerta
                navigate('/estoque');
            });
        } catch (error) {
            console.error('Erro ao atualizar produto:', error);
            
        }
    }

    return (
        <div className={styles.container}>
            <Form title="Editar Produto" textButton="Editar" onAction={handleUpdatePost} />
        </div>
    );
}

export default UpdateProduto;
