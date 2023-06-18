import React, { useState } from "react";
import styled from "styled-components";
import { postRegister } from "../services/register";
import { UseFech } from "../hooks/useFech";
import { getRolesh } from "../services/Rol";
import { Link } from "react-router-dom";


const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState();
  const [apellidomaterno, setApellidomaterno] = useState("");
  const [apellidopaterno, setApellidopaterno] = useState("");
  const [fecha_nacimiento, setFecha_nacimiento] = useState("");
  const [carnet, setCarnet] = useState("");

  const [id_roles, setId_roles] = useState("");

  const { data: rol } = UseFech(getRolesh);

  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const Enviar = (e) => {
    e.preventDefault();
    postRegister(
        nombre,
        apellidopaterno,
        apellidomaterno,
        fecha_nacimiento,
        carnet,
        email,
        telefono,
        id_roles,
        password,
        password_confirmation,
      () => {
        setNombre("");
        setEmail("");
        setTelefono("");
        setApellidomaterno("");
        setApellidopaterno("");
        setFecha_nacimiento("");
        setCarnet("");
        setPassword("");
        setPassword_confirmation("");
      }
    );
  };
  return (
    <Contenedor>
      <div>
      <form >
      <h1> Registrate</h1>
      
        <label htmlFor="nombre">nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="apellidopaterno">apellidopaterno</label>
        <input
          type="text"
          value={apellidopaterno}
          onChange={(e) => setApellidopaterno(e.target.value)}
        />
        <label htmlFor="apellidomaterno">apellidomaterno</label>
        <input
          type="text"
          value={apellidomaterno}
          onChange={(e) => setApellidomaterno(e.target.value)}
        />
        <label htmlFor="fecha_nacimiento">fecha_nacimiento</label>
        <input
          type="date"
          value={fecha_nacimiento}
          onChange={(e) => setFecha_nacimiento(e.target.value)}
        />
        <label htmlFor="carnet">carnet</label>
        <input
          type="text"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
        <label htmlFor="email">email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="telefono">telefono</label>
        <input
          type="number"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <label htmlFor="Contraseña">Contraseña</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmar Contraseña">confirmar Contraseña</label>
        <input
          type="text"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
        />
        <label htmlFor="Rol">Elije el Rol</label>
        <select onChange={(e) => setId_roles(e.target.value)}>
          <option>Seleccione El Rol</option>
          {rol.map((v, i) => (
            <option key={i} value={v.id}>
              {v.nombre}
            </option>
          ))}
        </select>
      <button onClick={Enviar}>Registrarse</button>
      <button>
            <Linkes to="/login">login</Linkes>
      </button>

      </form>
      </div>
      <section>
     
     </section>
    </Contenedor>
  );
};

export default Register;


const Contenedor = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  & section {
    width: 51%;
    height: 100%;
    background-color: #639adb;
    position: relative;
    & img {
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: transparent;
      height: auto;
      z-index: -1;
      object-fit: cover;
    }
  }
  & > div {
    width: 50%;
    height: 100%;
    background-color: blue;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & form {
      width: 42rem;
      color:#fff;
      height: 46rem;
      background: rgba(255, 255, 255, 0.435);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      flex-wrap:wrap;
      content: "";
      left: -30%;
      position: absolute;
      z-index: 100;
      & h1 {
        font-size: 2em;
        margin: 2em 0 0.5em 0;
        width:100%;
        text-align:center;
      }
      & button {
        width: 80%;
        height: 3em;
        border-radius: 0.5em;
        background-color: blue;
        border: none;
        cursor: pointer;
        color: #fff;
      }
      & label {
        color: #000;
        font-size: 1.05em;
        width: 35%;

      }
      & select {
        width: 50%;
        height: 3em;
        border-radius: 0.5em;
        outline: none;
        border: solid 1px #0005;
      }
      & input {
        width: 60%;
        height: 3em;
        border-radius: 0.5em;
        outline: none;
        border: solid 1px #0005;
      }
    }
  }
`;

export const Linkes = styled(Link)`
color:#fff;
text-decoration:none;
width:100%;
height:100%;
`;
