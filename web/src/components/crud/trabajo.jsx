import React from "react";
import "../../style/trabajo.css";

const Trabajo = () => {
  return (
    <div>
      <div className="crud">
        <h1 className="crud-title">Usuarios</h1>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trabajo;
