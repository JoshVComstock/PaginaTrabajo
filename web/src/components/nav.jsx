import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <nav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1t6W1cgpw3NFDyNW18-diiLsRQlpm27nnQ&usqp=CAU"
          alt=""
        />
        <div>
          <a href="">Inicio</a>
          <a href="">Empleos</a>
          <a href="">Empresas</a>
        </div>
        <div>
          <a href="">Iniciar secion</a>
          <a href="">Registro</a>
        </div>
      </nav>
    </>
  );
};

export default Nav;
