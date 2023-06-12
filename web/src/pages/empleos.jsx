import React from "react";
import "../style/empleos.css";
const Empleos = () => {
  return (
    <div className="container">
      <img
        src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="search-container">
        <input type="text" class="search-input" placeholder="Buscar empleo" />
        <button className="search-button">Buscar</button>
      </div>
      <div className="results">
        <div className="result-box"></div>
        <div className="result-box"></div>
        <div className="result-box"></div>
      </div>
    </div>
  );
};

export default Empleos;
