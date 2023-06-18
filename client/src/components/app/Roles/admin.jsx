import React, { useState } from "react";
import { Linkes, Img, Imga } from "../../../styles/roles";
import Centros from "../../../img/icons/Centros.jpg";
import City from "../../../img/icons/City.jpg";
import Redess from "../../../img/icons/Redes.jpg";
import Laboratorioicons from "../../../img/icons/Laboratorio.jpg";
import styled from "styled-components";

const AdminComponent = () => {
  return (
    <Master>
      <p>Inicio</p>
      <Linkes to="/home">
        <Img src="src\img\home.png" alt="" />
        Dashboard
      </Linkes>
      <p>Resgistros Entidades</p>
    </Master>
  );
};

export default AdminComponent;

export const Master = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  & p {
    padding: 1.5em 0 0 2.5em;
    font-size: 0.7em;
    color: #08103fce;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    &:first-child {
      padding: 3em 0em 1em 2.5em;
    }
  }
  height: 88vh;
  overflow-y: scroll;
`;

export const Options = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-color: #c1c1c11f;
  padding: 10px;
  margin-top: 10px;
  border: solid 1px #0002;
`;


export const Divd = styled.div`
  background: rgb(245, 245, 243);
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  font-size: 0.95em;
  margin-left: 10%;
`;
