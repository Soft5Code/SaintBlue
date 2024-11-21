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
            question: 'Questao 1',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto '
        },
        {
            question: 'Questao 2',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto '
        },
        {
            question: 'Questao 3',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto '
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