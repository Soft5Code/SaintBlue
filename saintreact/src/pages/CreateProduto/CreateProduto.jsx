import Swal from 'sweetalert2';
import { Form } from "../../components/Form/form";
import { useNavigate } from "react-router-dom";
import api from '../../services/api';

export function CreateProduto() {

    const navigate = useNavigate();

    async function handleCreateProduct(data) {
        try {
            // Envia os dados para a API
            const response = await api.post('cadastrar', data);

            // Debug da resposta da API
            console.log('Resposta da API:', response);

            // Verifica se o status é 201
            if (response.status === 201) {
                // Exibe o alerta de sucesso
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Produto criado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/estoque'); // Redireciona após fechar o alerta
                });
            } else {
                // Exibe um alerta genérico de erro
                Swal.fire({
                    title: 'Erro',
                    text: response.data?.message || 'Erro ao criar o produto. Tente novamente.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            
        }
    }

    return (
        <div>
            <Form title={'Cadastrar Produto'} textButton={'Cadastrar'} onAction={handleCreateProduct} />
        </div>
    );
}

export default CreateProduto;
