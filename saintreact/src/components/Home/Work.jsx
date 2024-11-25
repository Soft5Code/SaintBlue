
import Luz from '../../assets/lightbulb_9648263.png';
import styles from '../../pages/LandPaging/Land.module.css';

const Work = () => {
    const workInfoData = [
        {
            image:Luz,
            title:'Eficiencia',
            text:'O Saint Blue torna o gerenciamento de estoque mais rápido e preciso, ajudando sua empresa a economizar tempo e reduzir erros. '
        },
        {
            image: Luz,
            title:'Simplicidade',
            text:'Com uma interface fácil de usar, o Saint Blue permite que qualquer pessoa, independentemente de experiência, gerencie o estoque de forma eficaz. '
        },
        {
            image:Luz,
            title:'Perfil',
            text:'A plataforma é totalmente personalizável para atender às necessidades específicas de cada empresa, garantindo um controle de estoque único e sob medida. '
        },
    ]
  return (
    <div className={styles.workSectionWrapper} id="funcionalidades">
        <div className={styles.workSectionTop}>
                <p className={styles.primarySubHeading}>Funcionalidades</p>
                <h1 className={styles.primaryHeading}>Como funciona?</h1>
                <p className={styles.primaryText}>
                Com uma plataforma intuitiva e personalizada, você consegue organizar entradas, saídas e visualizar relatórios detalhados, tudo na palma da sua mão.
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