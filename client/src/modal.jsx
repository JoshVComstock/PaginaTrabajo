import React from "react";
import styled from "styled-components";
import { useModalContext } from "./context/modalContext";
const Modal = () => {
  const { openModal, setOpenModal, titulo, contenido } = useModalContext();
  if (openModal)
    return (
      <DivModalContainer>
        <DivAtras onClick={() => setOpenModal(false)}></DivAtras>
        <DivChildContainer>
          <DivCabecera>
            
            <Botoncerrar onClick={() => setOpenModal(false)}>X</Botoncerrar>
          </DivCabecera>
          <PTitulo>{titulo}</PTitulo>
          <DivBody>{contenido}</DivBody>
        </DivChildContainer>
      </DivModalContainer>
    );
};

export default Modal;
const Botoncerrar = styled.button`
  height: 35px;
  width: 35px;
  font-size: 17px;
  color: #fff;
  background: none;
  cursor: pointer;
`;
const DivModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const DivAtras = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  animation-name: transitionBackground;
  @keyframes transitionBackground {
    0% {
      background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
`;

const DivChildContainer = styled.div`
  z-index: 1;
  border-radius: 10px;
  min-width: 400px;
  background-color: #fff;
  animation: move 1s;
  transform: translateY(50px);
  margin-bottom: 100px;
`;

const PTitulo = styled.p`
  width: 100%;
  font-weight: 400;
  font-size: 22px;
  display: flex;
  justify-content: center;
  color: #000;
`;
const DivCabecera = styled.div`
  width: 100%;
  height: 20px;
  padding: 0px 26px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: rgb(0, 0, 0);
  position: relative;
  border-radius: 8px 8px 0 0;
`;
const DivBody = styled.div`
  padding: 26px;
  background-color: #639adb;

`;
