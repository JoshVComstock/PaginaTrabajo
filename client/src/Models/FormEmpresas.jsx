import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { postEmpresas, updateEmpresas } from "../services/Empresas";
const FormEmpresas = ({
  getApi,
  empresaactual,
  setEmpresaactual,
  closeModal,
}) => {

  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState();
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (Object.keys(empresaactual).length > 0) {
      setNombre(empresaactual.nombre);
      setDireccion(empresaactual.direccion);
      setTelefono(empresaactual.telefono);
      setEmail(empresaactual.email);
    }
    return () => {
      setEmpresaactual({});
    };
  }, [empresaactual]);

  const updatepost = (e) => {
    e.preventDefault();
    if (Object.keys(empresaactual).length > 0) {
      updateEmpresas(
        {
          id: empresaactual.id,
          nombre: nombre,
          direccion: direccion,
          telefono: telefono,
          email: email,
        },
        () => {
          closeModal();
          setEmpresaactual({});
          getApi();
        }
      );
    } else {
      postEmpresas(nombre, direccion, telefono, email, () => {
        setNombre("");
        setDireccion("");
        setTelefono("");
        setEmail("");
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
                type="text"
                placholder="Nombre de empresa"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <label htmlFor="">Direccion</label>
              <Input
                type="text"
                placholder="Direccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
              <label htmlFor="">Telefono</label>
              <Input
                type="text"
                placholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
              <label htmlFor="">Email</label>
              <Input
                type="text"
                placholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Divinputlabel>
          </Divinput>
          <Divboton>
            <Botonagregar onClick={(e) => updatepost(e)}>
              {Object.keys(empresaactual).length > 0 ? "Editar" : "Agregar"}
            </Botonagregar>
          </Divboton>
        </form>
      </div>
    </Container>
  );
};

export default FormEmpresas;

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
  &:hover{
    border: 1px solid #034078;
    box-shadow: 1px 0px 2px 0px #034078;
  }
`;
const Divboton = styled.div`
  display: flex;
  justify-content: center;
`;
const Botonagregar = styled.button`
  padding: 10px;
  cursor: pointer;
  background: #0077b6;
  color: #fff;
  border-radius: 7px;
  &:hover {
    background: #40607e;
  }
`;
