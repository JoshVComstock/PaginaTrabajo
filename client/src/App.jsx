import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Ciudades from "./pages/Empresas";
import Rol from "./pages/Rol";
import Navbar from "./components/app/navbar";
import Home from "./pages/Home";
import { ModalContextProvider } from "./context/modalContext";
import Laboratorios from "./pages/Trabajo";
import Modal from "./modal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import { Navcontextprovider } from "./context/navcontext";
import { Usercontextprovider } from "./context/userContext";
import Consultas from "./pages/Postulaciones";
import FormEmpresas from "./Models/FormEmpresas";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalContextProvider>
          <Usercontextprovider>
            <Navcontextprovider>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Navbar />}>
                  <Route path="home" element={<Home />} />
                  <Route path="centros" element={<Rol />} />
                  <Route path="empresas" element={<Ciudades />} />
                  <Route path="redes" element={<Rol />} />
                  <Route path="laboratorios" element={<Laboratorios />} />
                  <Route path="consultas" element={<Consultas />} />
                  <Route path="formempresa" element={<FormEmpresas />} />
                </Route>
              </Routes>
              <Modal />
            </Navcontextprovider>
          </Usercontextprovider>
        </ModalContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
