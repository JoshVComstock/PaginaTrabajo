import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Logos from "../../img/logoo.jpg";
import { useNavContext } from "../../context/navcontext";
import { useuserContext } from "../../context/userContext";
import AdminComponent from "./Roles/admin";
import { Linkes, Img, Imga } from "../../styles/roles";

const Navbar = () => {
  const { logged } = useNavContext;
  const navegation = useNavigate();
  const { user, setUser } = useuserContext();
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const Cerrasesion = () => {
    localStorage.removeItem("user");
    navegation("/login");
  };

  return (
    <>
      <Divheader>
        <Topnav>
          <Logo>
            <H>Franz loquisho</H>
          </Logo>
          <Diva>
            <Linkes to="/empresas">Empresas</Linkes>
            <Linkes to="/consultas">Postulantes</Linkes>
            <Linkes to="/centros">Usuarios</Linkes>
            <Linkes to="/laboratorios">Trabajos</Linkes>
          </Diva>
          <User>
            <Topnavimg src="src\img\avatar.png" alt="" />
            <Select>
              <Option>{user.nombre}</Option>
            </Select>
            <button onClick={Cerrasesion}>Salir</button>
          </User>
        </Topnav>
       <Divroute>
         <Outlet />
       </Divroute>
      </Divheader>
    </>
  );
};

export default Navbar;
const Divheader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 245, 243);
`;
const Divroute=styled.div`  
height: calc(100vh - 12vh);
width: 100wh;

`;
const Select = styled.select`
  border: none;
  text-align: center;
  transition: height 0.5s ease;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`;

const Option = styled.option`
  outline: none;
  border: none;
  text-align: start;
  color: blue;

  &::first-letter {
    font-size: 1.2em;
  }
`;
const Topnav = styled.div`
  height: 12vh;
  width: 100%;
  background-color: rgb(245, 245, 243);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  box-shadow: 0px 2px 5px 0px #0000004e;
  padding: 0 3em;
  z-index: 5;
`;

const Logo = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Topnavimg = styled.img`
  height: 35px;
  filter: saturate(0%);
`;
const User = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const H = styled.h5`
  color: #000000;
  font-size: 1.3em;

  &::first-letter {
    font-size: 1.2em;
    color: blue;
  }
`;
const Diva = styled.div`
  background-color: rgb(245, 245, 243);
  cursor: pointer;
  text-decoration: none;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
