import React from "react";
import { useState } from "react";
import Trabajo from "./components/crud/trabajo";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Formulariousuario from "./components/user/formulariousuario";
import Dashboard from "./pages/admin/dashboard";
import Empleos from "./pages/empleos";
import Home from "./pages/home";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Nav />}>
            <Route path="home" element={<Home />} />
            <Route path="empleos" element={<Empleos />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
