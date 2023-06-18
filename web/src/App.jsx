import React from "react";
import { useState } from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Home from "./pages/home";
import Login from "./pages/login";
import Abusqueda from "./pages/busqueda";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Nav />}>
            <Route path="home" element={<Home />} />
            <Route path="empleos" element={<Abusqueda />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
