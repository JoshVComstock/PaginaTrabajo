import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import EmpresasForm from "../Models/FormEmpresas";
import { Link } from "react-router-dom";
import styled from "styled-components";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

import { UseFech } from "../hooks/useFech";
import { deleteEmpresas, getEmpresas } from "../services/Empresas";
const Empresas = () => {
  const [empresaactual, setEmpresaactual] = useState({});
  const { getApi, data: Empresa } = UseFech(getEmpresas);
  const { openModal, closeModal } = useModal(
    Object.keys(empresaactual).length > 0
      ? "Editar Empresa"
      : "Agregar Empresa",
    <EmpresasForm
      getApi={getApi}
      empresaactual={empresaactual}
      setEmpresaactual={setEmpresaactual}
      closeModal={() => {
        closeModal();
      }}
    />
  );
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    if (Object.keys(empresaactual).length > 0) {
      openModal();
    }
  }, [empresaactual]);
  return (
    <Container>
      <div>
        <label>Empresas</label>{" "}
        <input
          type="text"
          placeholder="Buscar"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <button onClick={openModal}>Nueva empresa</button>
      </div>
      <section>
        <table>
          <thead>
            <tr>
              <th>Nº</th>
              <th>EMPRESA</th>
              <th>DIRECCION</th>
              <th>TELEFONO</th>
              <th>CORREO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          {Empresa.filter((v) =>
            v.nombre.toLowerCase().includes(filtro.toLowerCase())
          ).map((v, i) => (
            <tbody key={i}>
              <tr>
                <th>{i + 1}</th>
                <th>{v.nombre}</th>
                <th>{v.direccion}</th>
                <th>{v.telefono}</th>
                <th>{v.email}</th>
                <th>
                  <section>
                    <button
                      onClick={() => {
                        setEmpresaactual(v);
                      }}
                    >
                      {" "}
                      Editar{" "}
                    </button>
                    <button
                      onClick={() => {
                        deleteEmpresas(v.id, getApi);
                      }}
                    >
                      Eliminar
                    </button>
                  </section>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </section>
    </Container>
  );
};
export default Empresas;
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
    & table {
      border-collapse: collapse;
      width: 80%;
      height: 100%;
      margin:0 auto;
      & > thead {
        & > tr {
          & th {
            background-color: #639adb;
            color:#fff;
            border-collapse: collapse;
            padding:0.5em 0;
          }
        }

      }

      & tbody{
        height:auto;
        & tr {
          & th{
            border-top:solid 1px #639adb;
            border-bottom:solid 1px #639adb;
            & > section{
      display:flex;
      flex-direction:column;
      gap:0.2em;
      margin:0.1em auto;
      & button{
        margin:0 auto;
        width:80%;
        background-color:#639adb;
        &:hover{
        background-color:#fff;
        color:#639adb;
        cursor: pointer;

        }
      }
    } 
          }
        }
      }
 
    }
 
  }
`;
