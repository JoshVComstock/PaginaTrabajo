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
<<<<<<< HEAD
import Empresas from "./pages/Empresas";
import Trabajos from "./pages/Trabajo";
import Postulaciones from "./pages/Postulaciones";
=======
import Register from "./pages/Register";
>>>>>>> 7792327226d0f08e714fb19b4e2d98c9e42428bb

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalContextProvider>
          <Usercontextprovider>
            <Navcontextprovider>
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<Navbar />}>
                  <Route path="usuarios" element={<Rol />} />
                  <Route path="empresas" element={<Empresas />} />
                  <Route path="trabajos" element={<Trabajos />} />
                  <Route path="postulaciones" element={<Postulaciones />} />
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
