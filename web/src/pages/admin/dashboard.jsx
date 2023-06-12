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
          <h2 className="page-title">Contenido del Dashboard</h2>
          <p>Aquí va el contenido del dashboard...</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
