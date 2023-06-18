import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { getTrabajo } from '../services/Trabajo';
import { UseFech } from '../hooks/useFech';
import { getPostulacion } from '../services/Postulacion';
import { deletePostulacion } from '../services/Postulacion';
const Postulaciones = () => {
  const { getApi, data: postulantes } = UseFech(getPostulacion);
  const [filtro, setFiltro] = useState("");
  return (
    <>
      <Divsearch>
        <label htmlFor="">Buscar postulantes</label>
        <input type="search" placeholder='Buscar' value={filtro} onChange={(e) => setFiltro(e.target.value)} />
      </Divsearch>
      <Section>
        {postulantes.filter((v) =>
          v.empresa.toLowerCase().includes(filtro.toLowerCase())
        ).map((v, i) => (
          <>
            <article key={i}>
              <p>Coordinador: {v.usuario}</p>
              <p>Empresa: {v.empresa}</p>
              <div>
                <p>Trabajo : {v.nombre}</p>
                <p>Modalidad</p>
                <p>fecha: {v.created_at}</p>
              </div>
              <p>
                {v.descripcion} </p>
              <Divbutton>
                <Botonap>Esperar</Botonap>
                <Botone onClick={() => deletePostulacion(v.id, getApi)}>Eliminar</Botone>
              </Divbutton>
            </article>
          </>
        ))}

      </Section>
    </>
  )
};
export default Postulaciones;
const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 2em auto;
  
  gap: 2em;

  & > h2 {
    color: blue;
    height: 1.2em;
    display: grid;
    width: 100%;
    place-content: start;
  }

  & > div {
    width: 100%;
    height: 10vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 1.5em;

    & > select {
      width: 15%;
      padding: 0.5em;
      color: blue;
      border: solid 1px blue;
      outline: none;
    }

    & > input {
      width: 50%;
      height: 50%;
      outline: none;
      border-radius: 1em;
      border: solid 1px blue;
    }
  }

  & article {
    width: calc(95% / 4);
    height: 20em;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.8em;
    position: relative;
    background-color: #ffffff1f;
    box-shadow: 0 5px 10px #0005;
    border-radius: 7px;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1em;

      & > p {
        border-left: solid 1px blue;
        padding: 0.5em;
        text-align: center;
        font-weight: 600;
      }
    }

    & > p {
      font-size: 1.05em;
      width: 80%;
      
    }

    & > button {
      position: absolute;
      bottom: 1em;
      width: 80%;
      border: none;
      background-color: blue;
      height: 2.5em;
      color: #fff;
      border-radius: 0.3em;
      transition: all 0.5s ease-in-out;

      &:hover {
        background-color: transparent;
        color: blue;
        border: solid 1px blue;
      }
    }
  }
`;
const Divbutton = styled.div`
margin: 20px;
padding: 10px;
 width: 100%;
 display: flex;
 flex-direction: row;
 
`;
const Botonap = styled.button`
  background: #0f58de;
  color: #fff;
  padding: 8px;
  border-radius: 7px;
  cursor: pointer;
`;
const Botone = styled.button`
  background: red;
  color: #fff;
  padding: 8px;
  border-radius: 7px;
  cursor: pointer;

`;
const Divsearch = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  place-items: center;
  & label{
    font-size: 30px;
  }
  & input{
    width: 30%;
    height: 25px;
    background: transparent;
    border-bottom: 1px solid #a5a5a5;
    outline: none;
    font-size: 15px;
    padding: 15px;
  }
`;
