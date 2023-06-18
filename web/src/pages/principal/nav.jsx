import { Link } from "react-router-dom";
import styled from "styled-components";
import Abusqueda from "./home/busqueda";
import Footer from "./footer";

const Nav = () => {
  return (
    <>
    <div>
      <Anav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1t6W1cgpw3NFDyNW18-diiLsRQlpm27nnQ&usqp=CAU"
          alt=""
        />
         <section>
         <Links  to="/home">Inicio</Links>
          <Links  to="/Empleos">Empleos</Links>
          <Links  to="/Empresas">Empresas</Links>
          <Links  to="/register">Registro</Links>
         </section>
         <Links  to="/login">Iniciar secion</Links>
         
      </Anav>
      <Abusqueda/>
      <Footer/>
      </div>
    </>
  );
};

export default Nav;
const Anav = styled.nav`
display:flex;
flex-direction:row;
align-items:center;
gap:2em;
width:100%;
justify-content:space-around;
background-color:#fff;
box-shadow:0 1px 5px #0005;
& section {
  height:100%;
  display:flex;
align-items:center;
justify-content:center;
}
& img{
  width:50px;
  height:auto;
}
height:10vh;
`;
const Links = styled(Link)`
 color:#000;
 font-size: 1em;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
 display:flex;
 justify-content:center;
 align-items:center;
 height:100%;
&:hover,
&:focus{
  border-bottom:solid 1px blue;
  
    color: blue;
};
&:active{
    color: yellow;
};
@media(max-width: 700px) {
        display: none;
}
`;




