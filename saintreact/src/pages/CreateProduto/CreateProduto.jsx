import { Form } from "../../components/Form/form";
import { useNavigate } from "react-router-dom";
import api from '../../services/api';



export function CreateProduto() {

    const navigate = useNavigate()

    async function handleCreateProduct(data) {
    try {
        // Espera pela resposta da API
        const response = await api.post('cadastrar', data);

        // Verifica se a resposta foi bem-sucedida (status 200)
        if (response.status === 200) {
            alert('Criado com sucesso');
            navigate('/estoque');  // Redireciona para a página de estoque
        } else {
            // Caso a resposta da API não seja bem-sucedida
            alert('Erro ao criar o produto. Tente novamente.');
        }

    } catch (error) {
        console.error('Erro ao criar produto:', error);
        // Exibe uma mensagem genérica de erro
        alert('Não foi possível criar o produto. Tente novamente.');
    }
}

    return (

        <div>
            <Form title={'Cadastrar Produto'} textButton={'Cadastrar'} onAction={handleCreateProduct} />
        </div>

    )
}
