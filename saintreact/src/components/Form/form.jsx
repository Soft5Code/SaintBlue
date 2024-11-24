import  styles  from  './formmm.module.css'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export function Form({title, textButton, onAction}) {

    const {register, handleSubmit} = useForm()
    const navigate = useNavigate() 
   

    return (
        <div className={styles.formmm}>
    <form onSubmit={handleSubmit(onAction)}>
        
        <h2>{title}</h2>
       
        
        <div className={styles.inputf}>
            <h3>Código:</h3>
            <input {...register('codigo')} />
        </div>

        <div className={styles.inputf}>
            <h3>Condicao:</h3>
            <input {...register('condicao')} />
        </div>

        <div className={styles.inputf}>
            <h3>Cor:</h3>
            <input  {...register('cor')} />
        </div>

        <div className={styles.inputf}>
            <h3>Marca:</h3>
            <input  {...register('marca')} />
        </div>

        <div className={styles.inputf}>
            <h3>Peso:</h3>
            <input  {...register('peso')} />
        </div>

        <div className={styles.inputf}>
            <h3>Preço:</h3>
            <input  {...register('preco')} />
        </div>

        <div className={styles.inputf}>
            <h3>Quantidade:</h3>
            <input  {...register('quantidade')} />
        </div>

        <div className={styles.inputf}>
            <h3>Produto:</h3>
            <input  {...register('produto')} />
        </div>

        <div className={styles.inputobs}>
            <h3>Observações:</h3>
            <textarea  {...register('observacoes')} />
        </div>

                   
                    <div className={styles.button}>
                    <button type='submit'>{textButton}</button>
                    <button onClick={() =>navigate('/estoque')}>Cancelar</button>
                </div>     
            </form>
        </div>
    )
}