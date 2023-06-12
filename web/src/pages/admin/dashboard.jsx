import React from "react";
import "../../style/bashboard.css";
const Dashboard = () => {
  return (
    <>
      <div class="dashboard">
        
        <div class="sidebar">
           
          <h1 class="dashboard-title">JOBABILITY</h1>
          <nav class="navigation">
            <ul>
              <li>
                <a href="#" class="active">
                  Trabajo
                </a>
              </li>
              <li>
                <a href="#">Empleados</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="content">
          <h2 class="page-title">Contenido del Dashboard</h2>
          <p>Aquí va el contenido del dashboard...</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
