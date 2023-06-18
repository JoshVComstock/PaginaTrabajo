import React from "react";
import { useState, useEffect } from "react";
import { useModal } from "../hooks/useModal";
import Searchicons from "./../img/search.jpg";
import Editar from "./../img/icons/Editar.jpg";
import Eliminar from "./../img/icons/Delete.jpg";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
import {
  Container,
  Titulo,
  Divbotones,
  Divsearchpadre,
  Divsearch,
  Search,
  Botonsearch,
  Botonacciones,
  Iconsacciones,
  Iconsacciones1,
  Botonesacciones,
  Divtabla,
  Thead,
  Tbody,
  Divmayor,
  Sectiontabla,
  Tabla,
  Th,
  Trdatos,
} from "../styles/crud";
import { UseFech } from "../hooks/useFech";
import { getRoles } from "../services/Rol";
const Rol = () => {
  const { getApi, data: Rol } = UseFech(getRoles);
  const [filtro, setFiltro] = useState("");
  return (
    <>
    <h1>USUARIOS</h1>
      <Divmayor>
        <label>buscar</label>
        <input
          type="text"
          placeholder="Buscar"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </Divmayor>
      <section>
        <h2>Registro Usuarios</h2>
      </section>
      <Sectiontabla>
        <Divtabla>
          <Tabla>
            <Thead>
              <tr>
                <Th>Nº</Th>
                <Th>USUARIO</Th>
                <Th>APELLIDO PATERNO</Th>
                <Th>APELLIDO MATERNO</Th>
                <Th>CARNET</Th>
                <Th>TELEFONO</Th>
                <Th>EMAIL</Th>
                <Th>ROL</Th>
                <Th>ACCIONES</Th>
              </tr>
            </Thead>
            {Rol.filter((v) =>
              v.nombre.toLowerCase().includes(filtro.toLowerCase())
            ).map((v, i) => (
              <Tbody key={i}>
                <tr>
                  <Trdatos>{i + 1}</Trdatos>
                  <Trdatos>{v.nombre}</Trdatos>
                  <Trdatos>{v.apellidopaterno}</Trdatos>
                  <Trdatos>{v.apellidomaterno}</Trdatos>
                  <Trdatos>{v.carnet}</Trdatos>
                  <Trdatos>{v.telefono}</Trdatos>
                  <Trdatos>{v.email}</Trdatos>
                  <Trdatos>{v.rol}</Trdatos>
                  <Trdatos>
                    <Botonacciones>
                      <div></div>
                      <div>
                        <Iconsacciones1
                          onClick={() => {
                            deleteRedes(v.id, getApi);
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
    </>
  );
};
export default Rol;
