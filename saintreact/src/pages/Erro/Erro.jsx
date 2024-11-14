import { Link } from "react-router-dom";
import './Erro.css';

function Erro(){
    return(
        <div className="erro">
            <h2 className="opsErro">Ops parece que essa pagina não existe! </h2>

            <span className="ops_Erro">Encontramos essas páginas aqui:</span> <br/>

            <Link to="/" className="error">Inicio</Link> <br/>
            <Link to="/estoque" className="error">Estoque</Link> <br/>
            <Link to="/fornecedores" className="error">Fornecedor</Link> <br/>
            <Link to="/colaboradores" className="error">Colaboradores</Link>
        </div>
    )
}

export default Erro;