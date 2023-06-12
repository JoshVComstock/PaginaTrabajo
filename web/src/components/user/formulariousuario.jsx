import React from "react";
import "../../style/formulariousuario.css";
const Formulariousuario = () => {
  return (
    <div className="container">
      <h2 class="form-title">Registro</h2>
      <form class="registration-form">
        <div className="card1">
          <div class="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              class="form-input"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div class="form-group">
            <label htmlFor="apellido-p">Apellido Paterno:</label>
            <input
              type="text"
              id="apellido-p"
              name="apellido-p"
              class="form-input"
              placeholder="Ingrese su apellido paterno"
            />
          </div>
          <div class="form-group">
            <label htmlFor="apellido-m">Apellido Materno:</label>
            <input
              type="text"
              id="apellido-m"
              name="apellido-m"
              class="form-input"
              placeholder="Ingrese su apellido materno"
            />
          </div>
          <div class="form-group">
            <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="fecha-nacimiento"
              name="fecha-nacimiento"
              class="form-input"
            />
          </div>
        </div>
        <div className="card2">
          <div class="form-group">
            <label htmlFor="carnet">Carnet de Identidad:</label>
            <input
              type="text"
              id="carnet"
              name="carnet"
              class="form-input"
              placeholder="Ingrese su carnet de identidad"
            />
          </div>
          <div class="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              class="form-input"
              placeholder="Ingrese su número de teléfono"
            />
          </div>
          <div class="form-group">
            <label htmlFor="gmail">Correo Electrónico:</label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              class="form-input"
              placeholder="Ingrese su dirección de correo electrónico"
            />
          </div>
          <div class="form-group">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              class="form-input"
              placeholder="Ingrese su contraseña"
            />
          </div>
        </div>
        <button type="submit" class="form-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};
export default Formulariousuario;
