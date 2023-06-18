import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useNavContext } from "../context/navcontext";
import { useuserContext } from "../context/userContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();
  const { setLogged } = useNavContext();
  const { user, setUser } = useuserContext();

  const registrarse = async (e) => {};
  const enviar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    if (response.ok) {
      const responsejson = await response?.json();
      /*       console.log(responsejson.user) */
      setUser(responsejson.user[0]);
      /*  document.cookie = `token=${responsejson.access_token}; max-age=${60 * 60};
        path=/; somesite=stric`; */
      /*      document.cookie = `user=${JSON.stringify(responsejson.user[0])}; max-age=${60 * 60 * 24};
        path=/; somesite=stric`; */
      localStorage.setItem("user", JSON.stringify(responsejson.user[0]));
      setLogged(true);
      setUser((user) => ({ ...user, isLogged: true }));
      navegate("/");
    }
  };
  return (
    <Contenedor>
      <div>
        <form action="">
          <h1> Iniciar sesión</h1>
          <label htmlFor="">Usuario</label>
          <input
            type="text"
            placeholder=" "
            value={email}
            onChange={(e) => {
            
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="">Contraseña</label>
          <input
            type="password"
            placeholder=" "
            value={password}
            onChange={(e) => {
             
              setPassword(e.target.value);
            }}
          />
          <button onClick={enviar}>Ingresar</button>
          <button>
            <Linkes to="/register">Register</Linkes>
          </button>
        </form>
      </div>
      <section>
     
     </section>
    </Contenedor>
  );
};

export default Login;
export const Linkes = styled(Link)`
color:#fff;
text-decoration:none;
width:100%;
height:100%;
`;
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
      width: 30rem;
      height: 30rem;
      background: rgba(255, 255, 255, 0.435);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      content: "";
      left: -30%;
      position: absolute;
      gap: 1em;
      z-index: 100;
      & h1 {
        font-size: 2em;
        margin: 2em 0 0.5em 0;
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
      }
      & input {
        width: 80%;
        height: 3em;
        border-radius: 0.5em;
        outline: none;
        border: solid 1px #0005;
      }
    }
  }
`;
