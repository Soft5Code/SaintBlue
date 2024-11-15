import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Login from './components/Login/login';
import Inicio from './pages/Inicio/Inicio';
import Estoque from './pages/Estoque/Estoque';
import Fornecedores from './pages/Fornecedores/Fornecedores';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import Erro from './pages/Erro/Erro';

import Sidebar from './components/Sidebar/Sidebar';

// Componente para renderizar a sidebar condicionalmente
function Layout({ children }) {
    const location = useLocation();
    const showSidebar = location.pathname !== '/login';

    return (
        <>
            {showSidebar && <Sidebar />}
            {children}
        </>
    );
}

function RoutesApp() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Inicio />} />
                    <Route path="/estoque" element={<Estoque />} />
                    <Route path="/fornecedores" element={<Fornecedores />} />
                    <Route path="/colaboradores" element={<Colaboradores />} />
                    <Route path="*" element={<Erro />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default RoutesApp;
