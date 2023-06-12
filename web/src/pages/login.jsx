import React from "react";
import '../style/login.css'

const Login = () => {
  return (
    <div div className="container">
      <table class="login-table">
        <tr>
          <td colspan="2" class="login-header">
            Iniciar sesión
          </td>
        </tr>
        <tr>
          <td class="login-label">Usuario:</td>
          <td>
            <input
              type="text"
              class="login-input"
              placeholder="Ingrese su usuario"
            />
          </td>
        </tr>
        <tr>
          <td class="login-label">Contraseña:</td>
          <td>
            <input
              type="password"
              class="login-input"
              placeholder="Ingrese su contraseña"
            />
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button class="login-button">Iniciar sesión</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Login;
