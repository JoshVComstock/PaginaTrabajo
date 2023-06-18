import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import EmpresasForm from "../Models/FormEmpresas";
import { Link } from "react-router-dom";
import styled from "styled-components";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import {
  Container,
  Botonacciones,
  Iconsacciones,
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Th,
  Trdatos,
  Sectiontabla,
  Tabla,
  Sectionpa,
  Divreport,
  Divbotonesa,
  Divmayor,
} from "../styles/crud";
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
      <Sectionpa>
        <h1>Empresas</h1>
        <Sectiond>
          <Dippadretabla>
            <Divmayor>
            <button onClick={openModal}>Nueva empresa</button>
              <input
                type="text"
                placeholder="Buscar"
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
              />
            </Divmayor>
            <section>
              
              <h2> Registro Empresas</h2>
              
            </section>
            <Sectiontabla>
              <Divtabla>
                <Tabla>
                  <Thead>
                    <tr>
                      <Th>Nº</Th>
                      <Th>EMPRESA</Th>
                      <Th>DIRECCION</Th>
                      <Th>TELEFONO</Th>
                      <Th>CORREO</Th>
                      <Th>ACCIONES</Th>
                    </tr>
                  </Thead>
                  {Empresa.filter((v) =>
                    v.nombre.toLowerCase().includes(filtro.toLowerCase())
                  ).map((v, i) => (
                    <Tbody key={i}>
                      <tr>
                        <Trdatos>{i + 1}</Trdatos>
                        <Trdatos>{v.nombre}</Trdatos>
                        <Trdatos>{v.direccion}</Trdatos>
                        <Trdatos>{v.telefono}</Trdatos>
                        <Trdatos>{v.email}</Trdatos>
                        <Trdatos>
                          <Botonacciones>
                            <div>
                              <Iconsacciones
                                onClick={() => {
                                  setEmpresaactual(v);
                                }}
                              >
                                Editar
                              </Iconsacciones>
                            </div>
                            <div>
                              <Iconsacciones1
                                onClick={() => {
                                  deleteEmpresas(v.id, getApi);
                                }}
                              >
                                Eliminar
                              </Iconsacciones1>
                            </div>
                          </Botonacciones>
                        </Trdatos>
                      </tr>
                    </Tbody>
                  ))}
                </Tabla>
              </Divtabla>
            </Sectiontabla>
          </Dippadretabla>
        </Sectiond>
      </Sectionpa>
    </Container>
  );
};
export default Empresas;

export const Sectiond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  gap: 2em;
`;
export const Dippadretabla = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: rgb(245, 245, 243);
  overflow: hidden;
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: solid 1px #0002;
  & section {
    width: 100%;
    display: flex;
    gap: 0.5em;
    flex-direction: row-reverse;
    justify-content: flex-end;
    
    & h2 {
      font-size: 1em;
      padding: 0.5em 2em;
      letter-spacing: 1.5px;
     
    }
  }
`;
const Divtop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Linkmininav = styled(Link)`
  color: #22223b;
  text-decoration: none;

  padding: 10px;
  &:hover {
    border-bottom: 2px solid #4a4e69;
    background-color: #9ea4ca;
    color: #fff;
  }
`;
