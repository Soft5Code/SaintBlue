import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useState, useEffect } from "react";

import Loading from "./pages/Loading/Loading";
import LoadingLogin from "./pages/LoadingLogin/LoadingLogin"; // Carregando novo componente
import Land from "./pages/LandPaging/Land";
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
  const hideSidebarRoutes = ["/login", "/Login", "/"]; // Adicione outras rotas aqui
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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginToInicioLoading, setIsLoginToInicioLoading] = useState(false); // Novo estado específico para o loading entre /login e /inicio
  const [prevPath, setPrevPath] = useState(""); // Armazena o caminho anterior
  const [isNavigating, setIsNavigating] = useState(false); // Controla se está navegando ou não

  useEffect(() => {
    let timeout;

    // Condição para verificar se a navegação é de /login (ou /Login) para /inicio
    const isLoginToInicio = (prevPath.toLowerCase() === "/login" && location.pathname.toLowerCase() === "/inicio");


    // Se for a navegação entre login e inicio, ativa o loading personalizado
    if (isLoginToInicio) {
      setIsLoginToInicioLoading(true);
      setIsLoading(false); // Desativa o loading global durante essa navegação
    } else {
      // Caso contrário, ativa o loading global se a navegação for lenta
      timeout = setTimeout(() => {
        if (!isLoginToInicio) {
          setIsLoading(true); // Exibe o loading global
        }
      }, 300); // Exibe o loading global após 300ms

      // Remove o loading global assim que a navegação for concluída
      setIsNavigating(true);
    }

    // Quando a navegação entre login e inicio termina, desativa o loading personalizado
    const finishLoading = () => {
      clearTimeout(timeout);
      setIsLoading(false);
      setIsLoginToInicioLoading(false);
      setIsNavigating(false);
    };

    // Atualiza o caminho anterior
    setPrevPath(location.pathname);

    // Chama a função de limpeza após a navegação
    return () => {
      finishLoading();
    };
  }, [location.pathname, prevPath]);

  return (
    <>
      {/* Exibe o loading personalizado entre /login e /inicio */}
      {isLoginToInicioLoading && <LoadingLogin />} {/* Novo loading personalizado */}

      {/* Exibe o loading global para navegações mais lentas */}
      {!isLoginToInicioLoading && isLoading && !isNavigating && <Loading />}

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
