import React from "react";
import Centro from "../components/home/centro";
import Bloques from "../components/home/bloques";
import Portada from "../components/home/portada";
const Home = () => {
  return (
    <>
   
      <section>
        <Centro />
      </section>
      <section>
        <Bloques />
      </section>
    </>
  );
};

export default Home;
