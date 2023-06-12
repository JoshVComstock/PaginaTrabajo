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

function App() {
  return (
    <>
      {/* <Home /> 
      <Nav />
      <Empleos />
      <Login />
      <Footer />
      <Dashboard />
      <Formulariousuario/>*/}
      <Trabajo />
    </>
  );
}

export default App;
