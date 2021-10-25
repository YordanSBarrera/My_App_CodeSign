import { useState } from "react";

const Formulario = ({
  valorInial,
  nameFormulario,
  info,

  setValor,
  nameButton,
}) => {
  /*
  valorInial,
  nameFormulario, -> nombre del ejercicio
  info,       -> informacion del ejercicio
  setValor, -> pasar dato al padre (ejercicio)
  nameButton ->nombre del Botton
  */
  const [input, setInput] = useState(valorInial);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValor(input);
    console.log(input);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
    console.log("Cambio el submit");
  };

  return (
    <div className="container">
      <div className="text-muted text-center">
        <h3>{nameFormulario ? nameFormulario : "Formulario x Default"}</h3>{" "}
      </div>
      <div className="row">
        <div className="col-7">
          <form onSubmit={handleSubmit}>
            <h5 className="text-muted">Formulario</h5>
            <input
              type="text"
              placeholder={valorInial}
              value={input}
              onChange={handleChange}
              name="campo"
            />
            <input
              className="mx-2 my-3"
              type="submit"
              value={nameButton ? nameButton : "Aceptar"}
            />
          </form>
        </div>
        <div className="col-5">{info}</div>
      </div>
    </div>
  );
};
export default Formulario;
