//import { useEffect, useState } from "react";

const Formulario = (props) => {
  /*   const handleSubmit = (e) => {
        e.preventDefault();
        props.setValor(input);
    
        setRes(props.respuesta);
      };
*/
  return (
    <div className="container">
      <div className="text-muted text-center">
        <h3>
          {props.nameFormulario ? props.nameFormulario : "Formulario x Default"}
        </h3>
      </div>
      <div className="row">
        <div className="col-7">
          <form onSubmit={props.handleSubmit}>
            <h5 className="text-muted">Formulario</h5>
            <input
              type="text"
              placeholder={props.ValorInicial}
              value={props.value}
              onChange={(e) => props.setValor(e.target.value)}
              name="campo"
            />
            <input
              className="mx-2 my-3"
              type="submit"
              value={props.nameButton ? props.nameButton : "Aceptar"}
            />
          </form>
          <label>{props.respuesta}</label>
        </div>
        <div className="col-5">{props.info}</div>
      </div>
    </div>
  );
};
export default Formulario;
