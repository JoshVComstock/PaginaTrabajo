import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <>
      <Container>
        <img src="" alt="" />
        <div>
          <Link>Inicio</Link>
          <Link>Empleos</Link>
          <Link>Empresas</Link>
        </div>
        <div>
          <Link>Login</Link>
          <Link>Registrarse</Link>
        </div>
      </Container>
    </>
  );
};

export default Nav;

const Container=styled.nav`
    
`;
