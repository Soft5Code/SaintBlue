import { Link } from "react-router-dom";

import Filtro from "../../components/Filtro/Filtro";
import './index.css';

function Estoque() {
    return (
        <main>
            <div class="container">
                <h1 class="aba">Estoque</h1>
            </div>
            <div>
                <div class="linha_main"></div>
            </div>
            <Filtro />
        </main>
    );
}

export default Estoque;