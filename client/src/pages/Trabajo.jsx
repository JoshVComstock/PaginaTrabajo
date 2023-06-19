import React from "react";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import styled from "styled-components";
import { deleteTrabajo, getTrabajo } from "../services/Trabajo";
import { UseFech } from "../hooks/useFech";
import Formlaboratorio from "../Models/FormTrabajo";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const Trabajos = () => {
  const [trabajoactual, setTrabajoactual] = useState({});
  const [filtro, setFiltro] = useState("");
  const { getApi, data: trabajo } = UseFech(getTrabajo);

  const { openModal, closeModal } = useModal(
    Object.keys(trabajoactual).length > 0
      ? "Editar "
      : "Agregar ",
    <Formlaboratorio
    getApi={getApi}
    trabajoactual={trabajoactual}
    setTrabajoactual={setTrabajoactual}
    closeModal={() => {
      closeModal();
    }}
    />
  );

  return (
    <Container>
      <div>
        <label>buscar</label>{" "}
        <input
          type="text"
          placeholder="Buscar"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button onClick={openModal}>Agregar</button>
      </div>
      <section>
        {trabajo.map((v,i) => (
          <article key={i}>
            <img
              src="https://cdn.pixabay.com/photo/2015/06/01/09/04/phone-793046_640.jpg"
              alt=""
            />
            <div>
              <h1>{v.nombre}</h1>
              <p>{v.descripcion}</p>
              <strong>{v.estado}</strong>
            </div>
            <section>
              <button     onClick={() => {
                          deleteTrabajo(v.id, getApi);
                        }}
                        >eliminar</button>
              <button  onClick={() => {
                    setTrabajoactual(v);
                  }} >editar</button>
            </section>
          </article>
        ))}
      </section>
    </Container>
  );
};
export default Trabajos;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    padding: 0 2em;
    margin: 0 auto;
    width: 100%;
    background-color: #639adb;
    height: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
    & label {
      color: #fff;
      text-transform: uppercase;
      font-size: 1.5;
    }
    & input {
      width: 80%;
      padding: 0.8em;
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #fff;
      outline: none;
      color: #fff;
      letter-spacing: 3px;
      &::placeholder {
        color: #fff;
      }
    }
    & button {
      width: 10%;
      padding: 0.7em;
      border: none;
      border-radius: 1em;
      cursor: pointer;
      border: solid 1px #639adb;
      &:hover {
        background-color: blue;
        color: #fff;
        border: solid 1px #fff;
      }
    }
  }
  & > section {
    margin: 10vh auto;
    width: 80%;
    background-color: transparent;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    & > article {
      box-shadow: 0 2px 5px #0005;
      margin: 0 auto;
      width: calc(90% / 4);
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      height:auto;
      & > img {
        width: 80%;
        height: 2em;
        height: auto;
        object-fit: cover;
        overflow: hidden;
      }
      & > div {
        width: 100%;
        background-color: #639adb;
        color: #fff;
        padding: 1em;
      }
      & strong {
        border-top: solid 1px #fff;
        padding: 0 40%;
        border-bottom: solid 1px #fff;
      }

      & > section {
        & button {
          color: blue;
          border: solid 2px #639adb;
          cursor: pointer;
          margin: 1em 0.5em;
          padding: 0.2em 2em;
          &:hover {
            background-color: #639adb;
            color: #fff;
          }
        }
      }
    }
  }
`;
