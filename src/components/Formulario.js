import { useState } from "react";

const Formulario = (props) => {
  /*
  {
  valorInial,
  nameFormulario,
  info,
  setValor,
  nameButton,
}
  valorInial,
  nameFormulario, -> nombre del ejercicio
  info,       -> informacion del ejercicio
  setValor, -> pasar dato al padre (ejercicio)
  nameButton ->nombre del Botton
  */
  const [input, setInput] = useState(props.valorInial);
  const [res, setRes] = useState(props.respuesta);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setValor(input);
    //console.log(input);
    props.exe();
    setRes(props.respuesta);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    // console.log(input);
    //console.log("Cambio el submit");
  };

  return (
    <div className="container">
      <div className="text-muted text-center">
        <h3>
          {props.nameFormulario ? props.nameFormulario : "Formulario x Default"}
        </h3>
      </div>
      <div className="row">
        <div className="col-7">
          <form onSubmit={handleSubmit}>
            <h5 className="text-muted">Formulario</h5>
            <input
              type="text"
              placeholder={props.valorInial}
              value={input}
              onChange={handleChange}
              name="campo"
            />
            <input
              className="mx-2 my-3"
              type="submit"
              value={props.nameButton ? props.nameButton : "Aceptar"}
            />
          </form>
          <label>{res}</label>
        </div>
        <div className="col-5">{props.info}</div>
      </div>
    </div>
  );
};
export default Formulario;
