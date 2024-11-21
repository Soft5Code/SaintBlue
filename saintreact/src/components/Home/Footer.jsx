import { GitHub } from "@mui/icons-material"
import { Instagram } from '@mui/icons-material'
import styles from '../../pages/LandPaging/Land.module.css';

const Footer = () => {
  return (
    <div className={styles.footerWrappper}>
        <div className='footer-section-one'>
            {/* <div className='footer-logo-container'>
                <img src={Logo} alt="" />
            </div> */}
            <div className={styles.footerIcons}>
                <GitHub/>
                <Instagram />
            </div>
        </div>
        <div className={styles.footerSectionTwo}>
            <div className={styles.footerSectionColumns}>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Carrers</span>
                <span>Testimonials</span>
                <span>Work</span>
            </div>
            <div className={styles.footerSectionColumns}>
                <span>244-5555-3333</span>
                <span>hello@food.com</span>
                <span>preess@food.com</span>
                <span>contact@food.com</span>
            </div>
            <div className={styles.footerSectionColumns}>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer