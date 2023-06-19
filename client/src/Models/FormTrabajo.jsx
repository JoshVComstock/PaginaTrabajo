import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { UseFech } from "../hooks/useFech";
import { getEmpresas } from "../services/Empresas";
import { postTrabajo,updateTrabajo } from "../services/Trabajo";
const Formlaboratorio = ({
  getApi,
  trabajoactual,
  setTrabajoactual,
  closeModal,
}) => {
  const [nombre, setNombre] = useState("");
  const [estado,setEstado]=useState("");
  const [fecha,setFecha]=useState("");
  const [descripcion,setDescripcion]=useState("");
  const [id_empresa, setId_empresa] = useState("");
  const { data: empresa } = UseFech(getEmpresas);

  useEffect(() => {
    if (Object.keys(trabajoactual).length > 0) {
      setNombre(trabajoactual.nombre);
      setEstado(trabajoactual.estado);
      setFecha(trabajoactual.fecha);
      setDescripcion(trabajoactual.descripcion);
    }
    return () => {
      setTrabajoactual({});
    };
  }, [trabajoactual]);
  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(trabajoactual).length > 0) {
      updateTrabajo(
        {
          id: trabajoactual.id,
          nombre: nombre,
          estado: estado,
          fecha: fecha,
          descripcion:descripcion,
          id_empresa: id_empresa,
        },
        () => {
          closeModal();
          setTrabajoactual({});
          getApi();
        }
      );
    } else {
      postTrabajo(nombre,descripcion, id_empresa, estado, fecha, () => {
        setNombre("");
        setEstado("");
        setFecha("");
        setDescripcion("");
        getApi();
        closeModal();
      });
    }
  };
  return (
    <Container>
      <div>
        <form>
          <Divinput>
            <Divinputlabel>
              <label>Nombre</label>
              <Input
                name="Nombre"
                placeholder="Ingrese un Nombre"
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Estado</label>
              <Input
                name="Direccion"
                placeholder="Estado"
                type="text"
                required
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Descripcion</label>
              <Input
                name="Direccion"
                placeholder="Estado"
                type="text"
                required
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Fecha</label>
              <Input
                name="Telefono"
                type="date"
                required
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divinput>
            <Divinputlabel>
              <label>Empresa</label>
              <Select
                value={id_empresa}
                onChange={(e) => setId_empresa(e.target.value)}
              >
                <option value="">Seleccione Trabajo</option>
                {empresa.map((v, i) => (
                  <option key={i} value={v.id}>
                    {v.nombre}
                  </option>
                ))}
              </Select>
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar
              onClick={(e)=>{updatepost(e)}}
            >
              {Object.keys(trabajoactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default Formlaboratorio;

const Container = styled.div``;
const Divinputlabel = styled.div`
  display: flex;
  flex-direction: column;
`;
const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  align-items: center;
`;
const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  &:focus {
    border: 1.5px solid #034078;
  }
`;
const Divboton = styled.div`
  display: flex;
  justify-content: center;
`;
const Botonagregar = styled.button`
  padding: 10px;
  cursor: pointer;
  background: #034078;
  color: #fff;
  border-radius: 7px;
  &:hover {
    background: #0077b6;
  }
`;
const Select = styled.select`
  width: 180px;
  outline: none;
  font-size: 16px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;
