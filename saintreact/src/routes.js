import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio/Inicio';
import Estoque from './pages/Estoque/Estoque';
import Fornecedores from './pages/Fornecedores/Fornecedores';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import Erro from './pages/Erro/Erro';

import Sidebar from './components/Sidebar/Sidebar';

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