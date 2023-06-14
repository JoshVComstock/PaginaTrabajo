import React from "react";
import "../../style/bashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        
        <div className="sidebar">
           
          <h1 className="dashboard-title">JOBABILITY</h1>
          <nav className="navigation">
            <ul>
              <li>
                <a href="#" className="active">
                  Trabajo
                </a>
              </li>
              <li>
                <a href="#">Empleados</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <h2 className="page-title">Usuarios</h2>
          <div className="cons">
      <div className="crud">
        <h1 className="crud-title"></h1>
        <table className="crud-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th> 
              <th>Email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>francisco</td>
              <td>frack@gmail.com</td>
              <td>
                <button className="crud-button">Editar</button>
                <button className="crud-button">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>hank</td>
              <td>hank@gmail.com</td>
              <td>
                <button className="crud-button">Editar</button>
                <button className="crud-button">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>agus</td>
              <td>agus@gmail.com</td>
              <td>
                <button className="crud-button">Editar</button>
                <button className="crud-button">Eliminar</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>asdas</td>
              <td>asdasd@gmail.com</td>
              <td>
                <button className="crud-button">Editar</button>
                <button className="crud-button">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
