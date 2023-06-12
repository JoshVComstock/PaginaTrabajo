import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <Anav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1t6W1cgpw3NFDyNW18-diiLsRQlpm27nnQ&usqp=CAU"
          alt=""
        />
          <Link  to="/home">Inicio</Link>
          <Link  to="/Empleos">Empleos</Link>
          <Link  to="/Empresas">Empresas</Link>
          <Link  to="/login">Iniciar secion</Link>
          <Link  to="/register">Registro</Link>
      </Anav>
    </>
  );
};

export default Nav;
const Anav = styled.nav`
display:flex;
flex-direction:row;
gap:2em;
& img{
  width:100px;
}
& Link{
  text-decoration:none;
}
`;