import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Login from "./components/Login/login";
import Inicio from "./pages/Inicio/Inicio";
import Estoque from "./pages/Estoque/Estoque";
import Fornecedores from "./pages/Fornecedores/Fornecedores";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import Erro from "./pages/Erro/Erro";

import Sidebar from "./components/Sidebar/Sidebar";
import "./transitions.css"; // Arquivo de estilos para as transições

// Componente para renderizar a sidebar condicionalmente
function Layout({ children }) {
  const location = useLocation();
  // Rotas onde a Sidebar NÃO deve aparecer
  const hideSidebarRoutes = ["/login", "/Login"]; // Adicione outras rotas aqui
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <>
      {showSidebar && <Sidebar />}
      {children}
    </>
  );
}

function RoutesApp() {
  const location = useLocation(); // Captura a localização atual para animações

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key} // Garante animação em cada rota única
        timeout={300} // Duração da transição
        classNames="fade" // Prefixo para classes de transição
      >
        <div className="page-container">
          <Routes location={location}>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/fornecedores" element={<Fornecedores />} />
            <Route path="/colaboradores" element={<Colaboradores />} />
            
            <Route path="*" element={<Erro />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <Layout>
        <RoutesApp />
      </Layout>
    </BrowserRouter>
  );
}

export default AppWrapper;
