import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

import { UseFech } from "../hooks/useFech";
import { getRoles } from "../services/Rol";
import { Container } from "./Empresas";
const Rol = () => {
  const { getApi, data: Rol } = UseFech(getRoles);
  const [filtro, setFiltro] = useState("");
  return (
    <>
      <Container>
      <div>
        <label>USUARIOS</label>{" "}
        <input
          type="text"
          placeholder="Buscar"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        {/* <button onClick={openModal}>Registrar Usuario</button> */}
      </div>
      <section>


    
     
          <table>
            <thead>
              <tr>
                <th>Nº</th>
                <th>USUARIO</th>
                <th>APELLIDO PATERNO</th>
                <th>APELLIDO MATERNO</th>
                <th>CARNET</th>
                <th>TELEFONO</th>
                <th>EMAIL</th>
                <th>ROL</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            {Rol.filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            ).map((v, i) => (
              <tbody key={i}>
                <tr>
                  <th>{i + 1}</th>
                  <th>{v.nombre}</th>
                  <th>{v.apellidopaterno}</th>
                  <th>{v.apellidomaterno}</th>
                  <th>{v.carnet}</th>
                  <th>{v.telefono}</th>
                  <th>{v.email}</th>
                  <th>{v.rol}</th>
                  <th>
                    <section>
                        <button
                          onClick={() => {
                            deleteRedes(v.id, getApi);
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
    </>
  );
};
export default Rol;
