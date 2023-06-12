import React from "react";
import '../style/login.css'
import styled from "styled-components";

const Login = () => {
  return (
    <Contenedor  className="container">
      <table className="login-table">
        <tr>
          <td colspan="2" className="login-header">
            Iniciar sesión
          </td>
        </tr>
        <tr>
          <td className="login-label">Usuario:</td>
          <td>
            <input
              type="text"
              className="login-input"
              placeholder="Ingrese su usuario"
            />
          </td>
        </tr>
        <tr>
          <td className="login-label">Contraseña:</td>
          <td>
            <input
              type="password"
              className="login-input"
              placeholder="Ingrese su contraseña"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button className="login-button">Iniciar sesión</button>
          </td>
        </tr>
      </table>
    </Contenedor>
  );
};

export default Login;
const Contenedor = styled.div`

`;