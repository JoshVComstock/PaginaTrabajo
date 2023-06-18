import React from "react";
import styled from "styled-components";
const baseUrl = import.meta.env.VITE_BACKEND_URL;
const Home = () => {
  return <Dip></Dip>;
};

export default Home;
const Dip = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(236, 237, 241);
  padding: 2em 0;
`;
const Divmayor = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0em auto;
  background-color: transparent;
`;

const Grafia = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 1em;
  flex-wrap: wrap;
  & section {
    display: flex;
    width: 38%;
    flex-direction: column;
    border: solid 1px #0002;
    background-color: rgb(245, 245, 243);
    padding-bottom: 1em;
    &:nth-child(2n) {
      width: 60%;
    }
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.01);
      box-shadow: 0 0 5px 2px #0002;
    }
    & article {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000000;
      border-bottom: solid 1px #0002;
      padding: 1em 0;
      & button {
        cursor: pointer;
        border: solid 1px #0002;
        margin: 0 1em;
        background-color: rgb(34, 152, 202);
        color: #fff;
      }
      & h1 {
        color: #000000;
        font-size: 0.9em;

        &::first-letter {
          color: blue;
          text-transform: uppercase;
          font-size: 1.1em;
        }
      }
    }
  }
`;
export const Divreport = styled.div`
  width: 100%;
  height: 8em;
  display: flex;
  flex-wrap: nowrap;
  gap: 2em;
  & div {
    &:nth-child(2n) {
      background-color: rgb(245, 245, 243);
      color: #000;
    }

    &:nth-child(2n + 1) {
    }
    width: calc(100% / 4);
    height: 80%;
    display: flex;
    flex-direction: row;
    transition: all 0.2s ease-in-out;
    border: solid 1px #0002;
    justify-content: space-around;
    padding: 1em;
    position: relative;
    z-index: 1;
    color: #000;
    border-radius: 5px;
    background-color: rgb(245, 245, 243);

    &::before {
      content: "";
      bottom: -0.8em;
      position: absolute;
      border: solid 1px #0002;
      width: 90%;
      height: 0.69em;
      background-color: rgb(245, 245, 243);

      z-index: 1;
      border-radius: 0 0 5px 5px;
    }

    &:hover {
      &::before {
        display: none;
      }
      transform: scale(1.02);
      border: solid 1px #0000;
      box-shadow: 0 0 5px #0003;
    }
    & img {
      width: 50px;
      height: 50px;
    }
    & section {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 50%;
      & h3 {
        background-color: rgb(34, 152, 202);
        width: 100%;
        height: 50%;
        color: #fff;
        text-align: center;
        font-size: 1em;
        border: solid 1px #0002;

        &::first-letter {
          font-size: 1.6em;
        }
      }
    }
  }
`;
