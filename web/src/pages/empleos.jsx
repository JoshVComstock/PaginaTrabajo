import React from "react";
import "../style/empleos.css";
import { styled } from "styled-components";
import colors from "../style/colors";
const Empleos = () => {
  return (
    <div className="contain">
      
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Buscar empleo" />
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

const Container=styled.div`
  
`;
const SearchContainer=styled.div`
  
`;
const SearchInput=styled.input`
`;
const SearchBoton=styled.button`
  
`;
const Result=styled.div`
  
`;
const ResultBox=styled.div`
  
`;