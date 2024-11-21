import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState, useEffect } from "react";

import Loading from "./pages/Loading/Loading";
import Land from "./pages/LandPaging/Land";
import Login from "./components/Login/login";
import Inicio from "./pages/Inicio/Inicio";
import Estoque from "./pages/Estoque/Estoque";
import Fornecedores from "./pages/Fornecedores/Fornecedores";
import Colaboradores from "./pages/Colaboradores/Colaboradores";
import Erro from "./pages/Erro/Erro";

import Sidebar from "./components/Sidebar/Sidebar";
import "./transitions.css";



function Layout({ children }) {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/Login", "/"];
  const showSidebar = !hideSidebarRoutes.includes(location.pathname);

  return (
    <>
      {showSidebar && <Sidebar />}
      {children}
    </>
  );
}

function RoutesApp() {
  const location = useLocation(); 
  const [isLoading, setIsLoading] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  useEffect(() => {
    let timeout;
    const startNavigation = Date.now();

    
    timeout = setTimeout(() => {
      if (!hasNavigated) {
        setIsLoading(true); 
      }
    }, 500); 

    const finishLoading = () => {
      clearTimeout(timeout);
      setIsLoading(false);
      setHasNavigated(true);
    };

    
    return () => {
      finishLoading();
    };
  }, [location.pathname, hasNavigated]);

  return (
    <>
      {isLoading && <Loading />}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade"
        >
          <div className="page-container">
            <Routes location={location}>
              <Route path="/" element={<Land />} />
              <Route path="/login" element={<Login />} />
              <Route path="/inicio" element={<Inicio />} />
              <Route path="/estoque" element={<Estoque />} />
              <Route path="/fornecedores" element={<Fornecedores />} />
              <Route path="/colaboradores" element={<Colaboradores />} />

              <Route path="*" element={<Erro />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </>
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
