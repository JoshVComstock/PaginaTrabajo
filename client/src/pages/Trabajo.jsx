import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import styled from "styled-components";
import {
  Container,
  Divmayor,
  Sectiontabla,
} from "../styles/crud";
import mun from "../img/icons/Redes.jpg";
import { deleteTrabajo, getTrabajo } from "../services/Trabajo";
import { UseFech } from "../hooks/useFech";
import Formlaboratorio from "../Models/FormTrabajo";
const Trabajos = () => {
  const [actual, setActual] = useState({});
  const [filtro, setFiltro] = useState("");
  const { getApi, data: trabajo } = UseFech(getTrabajo);
  const { openModal, closeModal } = useModal(
    Object.keys(actual).length > 0 ? "Editar" : "Agregar ",
    <Formlaboratorio
      getApi={getApi}
      actual={actual}
      setActual={setActual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  return (
    <Container>
      <Dippadretabla>
        <Divmayor>
          <label>buscar</label>{" "}
          <input
            type="text"
            placeholder="Buscar"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
          />
        </Divmayor>
        <button onClick={openModal}>Agregar</button>
        <Sectiontabla>
          {trabajo.map((v, i) => (
            <>
              <Card key={i}>
                <img src="https://cdn.pixabay.com/photo/2015/06/01/09/04/phone-793046_640.jpg" alt="" />
                <div>
                  <h1>{v.nombre}</h1>
                  <p>{v.descripcion}</p>
                  <p>{v.estado}</p>
                </div>
                <Botones>
                  <button onClick={deleteTrabajo(v.id)} ><img src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png" alt="" /></button>
                  <button><img src="https://cdn-icons-png.flaticon.com/128/860/860814.png" alt="" /></button>
                </Botones>
              </Card>
            </>
          ))}
        </Sectiontabla>
      </Dippadretabla>
    </Container>
  );
};
export default Trabajos;
const Card = styled.div`
margin: 20px;
  height: 220px;
  width: 200px;
  border-radius: 7px;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & img{
    width: 175px;
    height: 110px;
    margin: 5px;
    border-radius: 7px;
  }
  & div{
    display: flex;
    flex-direction: column;
    & h1{
      font-weight: 700;
    }
    & p{
      font-size: 15px;
    }
  }
`;
const Botones = styled.div`
height:100%;
  width: 100%;
  display: flex;
 background: #000;
`;
export const Sectiond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
   flex-wrap: wrap;
  gap: 2em;
`;
export const Dippadretabla = styled.div`
  width: 100vw;
  background: rgb(255, 255, 255);
  overflow: hidden;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #0002;
  & section {
    width: 100%;
    display: flex;
    gap: 0.5em;
    flex-direction: row-reverse;
    justify-content: flex-end;
    & > button {
      width: 2.8em;
      height: 2.8em;
      background-color: rgb(34, 152, 202);
      color: #fff;
      border-radius: 0 0 8px 8px;
      font-size: 15px;
      transition: all 0.5s ease;
      box-shadow: 0 5px 5px #00002271;
      &:hover {
        height: 3em;
      }
    }
    & h2 {
      font-size: 1em;
      padding: 0.5em 2em;
      letter-spacing: 1.5px;
      
    }
  }
`;
