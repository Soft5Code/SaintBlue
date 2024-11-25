import { FiArrowRight } from 'react-icons/fi';
import { useState } from 'react';
import styles from '../../pages/LandPaging/Land.module.css';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Abre o cliente de email no navegador, preenchendo os campos de e-mail
      const emailLink = `mailto:saintbluesb@gmail.com?subject=Dúvida do cliente&body=Olá, tenho uma dúvida.%0A%0ACliente:%20${email}`;
      window.open(emailLink, '_blank');
    }
  };

  return (
    <div className={styles.workSectionWrapper}>
      <div className={styles.workSectionTop}>
        <p className={styles.primarySubHeading}>Contato</p>
        <h1 className={styles.primaryHeading}>Tem alguma questão?</h1>
        <h1 className={styles.primaryHeading}>Conte para nós</h1>
      </div>
      <div className={styles.contactFormContainer}>
        <input
          type="text"
          placeholder="seuemail@gmai.com"
          value={email}
          onChange={handleEmailChange}
        />
        <button 
          className={styles.secondaryButton} 
          onClick={handleSubmit}
        >
          Enviar<FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Contact;
