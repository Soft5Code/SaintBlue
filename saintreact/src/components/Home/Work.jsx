
import Luz from '../../assets/lightbulb_9648263.png';
import styles from '../../pages/LandPaging/Land.module.css';

const Work = () => {
    const workInfoData = [
        {
            image:Luz,
            title:'Eficiencia',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto '
        },
        {
            image: Luz,
            title:'Simplicidade',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto '
        },
        {
            image:Luz,
            title:'Perfil',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto  '
        },
    ]
  return (
    <div className={styles.workSectionWrapper}>
        <div className={styles.workSectionTop}>
                <p className={styles.primarySubHeading}>Funcionalidades</p>
                <h1 className={styles.primaryHeading}>Como funciona?</h1>
                <p className={styles.primaryText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae possimus debitis quidem sunt facilis consequatur, iusto 
                </p>
        </div>
        <div className={styles.workSectionBottom}>
            {
                workInfoData.map((data) =>(
                    // eslint-disable-next-line react/jsx-key
                    <div className={styles.workSectionInfo}>    
                        <div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        </div>
                        <div className='info-boxes-img-container'>
                            <img src={data.image} alt="" />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work