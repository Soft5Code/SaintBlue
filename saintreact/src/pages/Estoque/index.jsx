import { Link } from "react-router-dom";

import Filtro from "../../components/Filtro/Filtro";

function Estoque() {
    return (
        <div className="main">
            <div class="container">
                <h1 class="aba">Estoque</h1>
            </div>
            <div>
                <div class="linha_main"></div>
            </div>
            <Filtro />
        </div>
    );
}

export default Estoque;