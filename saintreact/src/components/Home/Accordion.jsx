import { useState } from "react";
import styles from '../../pages/LandPaging/Land.module.css';
import '../../pages/LandPaging/Accordion.css'
const Accordion = () => {
    
    const [select,setSelect] = useState(null)

    const toggle = (i) => {
        if (select === i){
            return setSelect(null)
        }

        setSelect(i)
    }

    const faq = [
        {
            question: '1- Como posso gerenciar o estoque de forma mais eficiente?',
            answer: 'Utilize a plataforma SaintBlue para automatizar processos, controlar entradas e saídas de produtos em tempo real e gerar relatórios detalhados que ajudam na tomada de decisões.'
        },
        {
            question: '2- O sistema oferece integração com outros softwares?',
            answer: 'Sim, o SaintBlue pode ser integrado com outros sistemas de gestão, como ERP e CRM, para otimizar ainda mais o controle de estoque e as operações da sua empresa.'
        },
        {
            question: '3- É possível personalizar o layout do sistema conforme minhas necessidades?',
            answer: 'Sim, o SaintBlue oferece opções de personalização para que você possa ajustar o sistema de acordo com as preferências da sua empresa e facilitar o uso diário.'
        },
    ]

  return (
    <div className={styles.workSectionWrapper}>
          <div className={styles.contactPageWrapper}>
                <p className={styles.primarySubHeading}>FAQ</p>
                <h1 className={styles.primaryHeading}>Quais são as peguntas frequentes?</h1>
            </div>
        <div className={styles.accordion}>
          
            {
                faq.map((item, i) => (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.itemA}>
                        <div className={styles.titleA} onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>{select ===  i ? 'x' : '+'}</span>
                        </div>
                        <div className={select === i ? 'content show' : 'content'}>{item.answer}</div>
                </div> 
                ))
            }
        </div>
    </div>
  )
}

export default Accordion