import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Estoque from './pages/Estoque';
import Fornecedores from './pages/Fornecedores';
import Colaboradores from './pages/Colaboradores';
import Erro from './pages/Erro';

import Sidebar from './components/Sidebar';

function RoutesApp(){
    return(
        <BrowserRouter>
            <Sidebar/>

            <Routes>
                <Route path="/" element={ <Inicio/> } />
                <Route path="/estoque" element={ <Estoque/> } />
                <Route path="/fornecedores" element={ <Fornecedores/> } />
                <Route path="/colaboradores" element={ <Colaboradores/> } />

                <Route path="*" element={ <Erro/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;