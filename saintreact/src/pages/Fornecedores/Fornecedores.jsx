import styles from './Fornecedores.module.css';
import Carregador from "./Carregador";
import Envoltorio from "./Envoltorio";
import Cubo from "./Cubo";

function Fornecedores (){
  return(
    <main className={styles.geral}>
            <div className={styles.header}>
              <div className={styles.bemVindo}>
                  <Carregador/>
              </div>
              <div className={styles.container}>
                  <h1 className={styles.aba}>Inicio</h1>
              </div>
            </div>
      </main>
  )
}

export default Fornecedores;