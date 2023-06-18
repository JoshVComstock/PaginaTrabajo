
import styled from "styled-components";

const Abusqueda = () => {
  return (
    <>
    <Section>
       <div>
         <input type="text" />
         <select name="" id="">
          <option value="">Empresas </option>
          <option value="">trabajos </option>
        </select>
        <button>Filtrar</button>
       </div>
       <h2>Resultados Empleos </h2>
      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>
      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

      <article>
        <p>adjunto a coordinador de proyectos</p>
        <p>Empresa</p>
        <div>
        <p>Tipo de Trabajo</p>
        <p>Modalidad</p>
        <p>fecha</p>

        </div>
       <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quis dolore ex unde consequatur voluptas, quae quia rerum inventore dolorem.
       </p>
        <button>Ver mas del Trabajo</button>
      </article>

    </Section>

    </>
  )
}

export default Abusqueda



const Section = styled.section`
display:flex;
width:80%;
flex-direction:row;
flex-wrap:wrap;
margin:2em auto;
gap:2em;
& > h2{
  color:blue;
  height:1.2em;
  display:grid;
  width:100%;
  place-content:start;
}
& > div{
  width:100%;
  height:10vh;
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items:center;
  gap:0 1.5em;
  & > select{
    width:15%;
    padding:0.5em;
    color:blue;
    border:solid 1px blue;
    outline:none;
  }
  & > input{
width:50%;
  height:50%;
  outline:none;
  border-radius:1em;
  border:solid 1px blue;

}
& > button{
  width:30%;
  height:50%;
  cursor: pointer;
  background-color:blue;
  color:#fff;
  border-radius:1em;
  border:none;
  transition:all 0.5s ease-in-out;
&:hover{
  background-color:transparent;
  border:solid 1px blue;
  color:blue;

}
}
}
& article{
  width:calc(95% / 3);
  height:20em;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:0.8em;
  position:relative;
  background-color:#ffffff1f;
  box-shadow:0 2px 5px #0005;
& > div{
  width:100%;
  display:flex;
  flex-direction:row;
justify-content:center;
gap:1em;
  & > p{
border-left:solid 1px blue;
padding:0.5em;
text-align:center;

  }
}
  & >p{
    font-size:1.05em;
    width:80%;

  }
  & > button{
    position:absolute;
    bottom:1em;
    width:80%;
    border:none;
    background-color:blue;
    height:2.5em;
    color:#fff;
    border-radius:0.3em ;
    transition:all 0.5s ease-in-out;
    &:hover{
    background-color:transparent;
    color:blue;
    border:solid 1px blue;

    }
  }
}

`;
