import { useState } from "react";

const Formulario = (props) => {
  /*
  {
  valorInial,
  valorInial2,
  nameFormulario,  -> nombre del ejercicio
  info,            -> informacion del ejercicio
  setValor,        -> pasar dato al padre (ejercicio)
  setValor2,
  nameButton,      ->nombre del Botton
  } 
  */
  const [input, setInput] = useState(props.valorInial ? props.valorInial : 0);
  const [input2, setInput2] = useState(
    props.valorInial2 ? props.valorInial2 : 0
  );
  const [res, setRes] = useState(props.respuesta ? props.respuesta : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setValor(input);
    props.setValor2(input2);

    props.exe();
    setRes(props.respuesta);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChange2 = (e) => {
    setInput2(e.target.value);
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
              placeholder={props.valorInial ? props.valorInial : ""}
              value={input}
              onChange={handleChange}
              name="campo"
              className="mx-2"
              size="10"
            />
            <input
              type="text"
              placeholder={props.valorInial2 ? props.valorInial2 : ""}
              value={input2}
              onChange={handleChange2}
              name="campo2"
              size="10"
            />
            <input
              className="mx-2 my-3"
              type="submit"
              value={props.nameButton ? props.nameButton : "Aceptar"}
            />
          </form>
          <label>{res}</label>
        </div>
        <div className="col-5">
          {props.info ? props.info : "This Form have not info"}
        </div>
      </div>
    </div>
  );
};
export default Formulario;
