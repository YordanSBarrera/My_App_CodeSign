import React from "react";
import Pruebas from "./Vistas/Pruebas";

const Inicio = () => {
  return (
    <>
      <div>
        <h1 className="text-danger">CodeSignal</h1>
        <p>
          Sitio para ejercitar el React y las funciones de ejercicios complejos
          de CodeSIGNAL. Ejemplo de prueba...
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          commodi rerum expedita et labore possimus minima placeat doloribus
          ipsa vero optio voluptate ut ipsam laudantium quas? Animi sequi omnis
          accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolorem voluptas eos doloribus deleniti, perspiciatis blanditiis nam
          optio quisquam nemo soluta eveniet exercitationem aspernatur
          laudantium pariatur ut quod temporibus, commodi numquam.
        </p>
        <h2>SOLO PRUEBAS...AREAS PAGINA PARA PRUEBAS</h2>
        <div style={{ background: "blue" }}>
          <i className="bi bi-arrow-down-square"></i>
          <Pruebas />
        </div>
      </div>
    </>
  );
};

export default Inicio;
