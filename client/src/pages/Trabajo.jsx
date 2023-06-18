import React from "react";
import { useState } from "react";
import { useModal } from "../hooks/useModal";
import styled from "styled-components";
import {
  Container,
  Divmayor,Dippadretabla,
} from "../styles/crud";

import { deleteTrabajo, getTrabajo } from "../services/Trabajo";
import { UseFech } from "../hooks/useFech";
import Formlaboratorio from "../Models/FormTrabajo";


const baseUrl = import.meta.env.VITE_BACKEND_URL;

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
        <Article>
          {trabajo.map((v) => (
            <div key={v.id}>
              <Card>
                <img src="https://cdn.pixabay.com/photo/2015/06/01/09/04/phone-793046_640.jpg" alt="" />
                <div>
                  <h1>{v.nombre}</h1>
                  <p>{v.descripcion}</p>
                  <p>{v.estado}</p>
                </div>
                <section>
                  <button onClick={() => deleteTrabajo(v.id)}>eliminar</button>
                  <button>editar</button>
                </section>
              </Card>
            </div>
          ))}
        </Article>
      </Dippadretabla>
    </Container>
  );
};

export default Trabajos;

const Article = styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction:row;
flex-wrap:wrap;
gap:1em;
border:solid 1px red;
`;
const Card = styled.div`
width:calc(95% / 4);
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
background-color:blue;
& > img{
  width:100%;
  height:auto;
}
& section {
  width:100%;
  background-color:#ecedf1;
  display:flex;
justify-content:space-around;
align-items:center;
& button{
  width:40%;
  padding:0.5em 0;
  background-color:blue;
  border-radius:0.5em;
}
}
`;
export const Sectiond = styled.div`
width:100%;


`;
