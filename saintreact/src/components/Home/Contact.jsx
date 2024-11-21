import { FiArrowRight } from 'react-icons/fi';
import styles from '../../pages/LandPaging/Land.module.css';

const Contact = () => {
  return (
    <div className={styles.workSectionWrapper}>
      <div className={styles.workSectionTop}>
        <p className={styles.primarySubHeading}>Contato</p>
        <h1 className={styles.primaryHeading}>Tem alguma questão?</h1>
        <h1 className={styles.primaryHeading}>Conte para nós</h1>
      </div>
        <div className={styles.contactFormContainer}>
            <input type="text" placeholder="seuemail@gmai.com"/>
            <button className={styles.secondaryButton}>
              Enviar<FiArrowRight />
            </button>
        </div>
     
        
    </div>
  )
}

export default Contact