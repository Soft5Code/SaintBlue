import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import image1 from '../../assets/daniel.jpg'
import image2 from '../../assets/gabriel.jpeg'
import image3 from '../../assets/pedro.jpeg'
import image4 from '../../assets/richard.jpg'
import { GitHub } from "@mui/icons-material"
import { FiArrowRight } from 'react-icons/fi';
import styles from '../../pages/LandPaging/Land.module.css';



const Carousel = () => {
    const images = [
        {
            image: image1,
            text: 'Daniel Vitor',
            function: 'Função: FULL-STACK',
            icon:  <GitHub/>
        },
        {
            image: image2,
            text: 'Gabriel Flausino'
        },
        {
            image: image3,
            text: 'Pedro Henrique'
        },
        {
            image: image4,
            text: 'Richard Castro'
        },
    ]

    const carousel = useRef();

    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth )
    }, [])

  return (
    <div className={styles.workSectionWrapper}>
        <div className={styles.workSectionTop}>
            <p className={styles.primarySubHeading}>Devs</p>
            <h1 className={styles.primaryHeading}>Nossos Excelentes Devs</h1>
            <button className={styles.secondaryButton} style={{ cursor: "default" }}>
            Arraste para o Lado<FiArrowRight />
          </button>
        </div>
        <div className={styles.workSectionBottom}>
            <div className={styles.appC}>
                
                <motion.div ref={carousel} className={styles.carousel} whileTap={{ cursor: 'grabbing' }}>
                    <motion.div className={styles.inner}
                    drag='x'
                    dragConstraints={{ right: 0, left: -width }}
                    initial={{ x:100 }}
                    animate={{ x:0 }}
                
                    >
                        {
                        images.map((image, index) => (
                            <motion.div className={styles.itemC} key={index}style={{ position: 'relative' }}>
                                <img src={image.image} alt="" />
                                <div className={styles.textC}>
                                    <h2>{image.text}</h2>
                                    <span>{image.function}</span>
                                    <a href="https://github.com/DanielOliveeira" target="blank">{image.icon}</a>
                                
                                </div>
                            </motion.div>

                        )) 
                        }
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Carousel