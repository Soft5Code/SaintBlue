
import ProfilePic from '../../assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';
import styles from '../../pages/LandPaging/Land.module.css';

const Testimonials = () => {
  return (
    <div className={styles.workSectionWrapper}>
        <div className={styles.workSectionTop}>
            <p className={styles.primarySubHeading}>FEEDBACK</p>
            <h1 className={styles.primaryHeading}>
               Qual a opinião dos clientes?
            </h1>
            <p className={styles.primaryText}>
                Na SaintBlue, valorizamos o feedback para aprimorar nosso sistema de gerenciamento de estoque. Ele nos ajuda a melhorar constantemente, tornando a plataforma mais eficiente e adaptada às necessidades de nossos clientes. Abaixo, alguns de nossos clientes satisfeitos:
            </p>
        </div>
        <div className={styles.testimonialResponsive}>
            <div className={styles.testimonialSectionBottom}>
                    <img src={ProfilePic} alt="" />
                    <p>
                        "A SaintBlue melhorou muito nosso gerenciamento de estoque. A plataforma é fácil de usar e aumentou nossa eficiência. O suporte é sempre rápido e atencioso. Recomendamos!"
                    </p>
                    <div className={styles.testimonialsStarsContainer}>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <h2>Jhon Doe</h2>
            </div>
            <div className={styles.testimonialSectionBottom}>
                    <img src={ProfilePic} alt="" />
                    <p>
                        "O sistema da SaintBlue é simples e eficaz. Agora temos mais controle sobre nosso estoque e o atendimento ao cliente é excelente. Ajudou a aumentar nossa produtividade."
                    </p>
                    <div className={styles.testimonialsStarsContainer}>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <h2>Eduardo Pereira</h2>
            </div>
            <div className={styles.testimonialSectionBottom}>
                    <img src={ProfilePic} alt="" />
                    <p>
                        "Estamos muito satisfeitos com a SaintBlue. O sistema é confiável e facilita a gestão do estoque. A equipe de suporte é sempre prestativa e resolutiva."
                    </p>
                    <div className={styles.testimonialsStarsContainer}>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <h2>Lucas Almeida</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonials