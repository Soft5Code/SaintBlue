import styles from './Land.module.css';
import Home from '../../components/Home/Home';
import About from "../../components/Home/About";
import Work from "../../components/Home/Work";
import Testimonials from "../../components//Home/Testimonials";
import Contact from "../../components/Home/Contact";
import Footer from '../../components/Home/Footer';
import Accordion from "../../components/Home/Accordion";
import Carousel from "../../components/Home/Carousel";


function Land() {
    return <div className={styles.body}>
        <Home/>
        <About />
        <Work />
        <Carousel />
        <Testimonials />
        <Contact />
        <Accordion />
        <Footer />
    </div>
}


export default Land