import  styles  from  './formmm.module.css'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export function Form({title, textButton, onAction}) {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate() 
   

    return (
            <div className={styles.formmm} >
            <form onSubmit={handleSubmit(onAction)} >
                <h2>{title}</h2>
                    <input placeholder="codigo" {...register('codigo')}/>
       
    
                    <input placeholder="Condicao" {...register('condicao')}/>
                

                    <input placeholder="Cor" {...register('cor')}/>

                    <input placeholder="Marca" {...register('marca')}/>

                    <textarea placeholder="Observacoes" {...register('observacoes')}/>
                    
                    <input placeholder="Peso" {...register('peso')}/>

                    <input placeholder="Preco" {...register('preco')}/>

                    <input placeholder="Quantidade" {...register('quantidade')}/>

                    <input placeholder="Produto" {...register('produto')}/>

                   
                    <div className={styles.button}>
                    <button type='submit'>{textButton}</button>
                    <button onClick={() =>navigate('/estoque')}>Cancelar</button>
                </div>     
            </form>
        </div>
    )
}