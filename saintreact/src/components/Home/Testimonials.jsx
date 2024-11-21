
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur alias doloribus repellat cumque aut voluptatem, similique quam! Pariatur suscipit corporis repellat? Laudantium eveniet accusantium ipsum at aliquam, nemo rem suscipit.
            </p>
        </div>
        <div className={styles.testimonialResponsive}>
            <div className={styles.testimonialSectionBottom}>
                    <img src={ProfilePic} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas quod exercitationem dolores aspernatur recusandae optio delectus tempore rerum voluptatibus ducimus odit maxime quidem reprehenderit voluptates, perferendis saepe deserunt voluptatem.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas quod exercitationem dolores aspernatur recusandae optio delectus tempore rerum voluptatibus ducimus odit maxime quidem reprehenderit voluptates, perferendis saepe deserunt voluptatem.
                    </p>
                    <div className={styles.testimonialsStarsContainer}>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                    <h2>Jhon Doe</h2>
            </div>
            <div className={styles.testimonialSectionBottom}>
                    <img src={ProfilePic} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptas quod exercitationem dolores aspernatur recusandae optio delectus tempore rerum voluptatibus ducimus odit maxime quidem reprehenderit voluptates, perferendis saepe deserunt voluptatem.
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
        </div>
    </div>
  )
}

export default Testimonials