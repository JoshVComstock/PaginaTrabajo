import React from "react";
import "../../style/formulariousuario.css";
const Formulariousuario = () => {
  return (
    <div className="container">
      <h2 className="form-title">Registro</h2>
      <form className="registration-form">
        <div className="card1">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="form-input"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido-p">Apellido Paterno:</label>
            <input
              type="text"
              id="apellido-p"
              name="apellido-p"
              className="form-input"
              placeholder="Ingrese su apellido paterno"
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido-m">Apellido Materno:</label>
            <input
              type="text"
              id="apellido-m"
              name="apellido-m"
              className="form-input"
              placeholder="Ingrese su apellido materno"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fecha-nacimiento">Fecha de Nacimiento:</label>
            <input
              type="date"
              id="fecha-nacimiento"
              name="fecha-nacimiento"
              className="form-input"
            />
          </div>
        </div>
        <div className="card2">
          <div className="form-group">
            <label htmlFor="carnet">Carnet de Identidad:</label>
            <input
              type="text"
              id="carnet"
              name="carnet"
              className="form-input"
              placeholder="Ingrese su carnet de identidad"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono">Teléfono:</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              className="form-input"
              placeholder="Ingrese su número de teléfono"
            />
          </div>
          <div className="form-group">
            <label htmlFor="gmail">Correo Electrónico:</label>
            <input
              type="email"
              id="gmail"
              name="gmail"
              className="form-input"
              placeholder="Ingrese su dirección de correo electrónico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contrasena">Contraseña:</label>
            <input
              type="password"
              id="contrasena"
              name="contrasena"
              className="form-input"
              placeholder="Ingrese su contraseña"
            />
          </div>
        </div>
        <button type="submit" className="form-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};
export default Formulariousuario;
