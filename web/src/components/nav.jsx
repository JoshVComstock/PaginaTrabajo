import { Link, Outlet } from "react-router-dom";
import "../style/nav.css";

const Nav = () => {
  return (
    <div>
      <nav>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr1t6W1cgpw3NFDyNW18-diiLsRQlpm27nnQ&usqp=CAU"
          alt=""
        />
        <a to="/home">Inicio</a>
        <a to="/empleos">Empleos</a>
        <a to="/empresas">Empresas</a>
       <div>
         <a to="login">Iniciar secion</a>
         <a to="/register">Registro</a>
       </div>
      </nav>
     
    </div>
  );
};

export default Nav;
