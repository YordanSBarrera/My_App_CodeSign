import { useState } from "react";

const Formulario = (props) => {
  /*
   itemForm.NameFormulario... nombre del formulario
   itemForm.ValorInicial
   itemForm.funcion  
   itemForm.NameBotton
   itemForm.Respuesta
  */
  const [valor, setValor] = useState("");
  const [respuesta, setRespuesta] = useState(props.Respuesta);
  return (
    <div className="container">
      <div className="text-muted text-aling-right"> "Formulario"</div>
      {props.ValorInicial ? setValor(props.ValorInicial) : ""}
      <h3 className="text-muted">
        {props.NameFormulario ? props.NameFormulario : "Formulario x Default"}
      </h3>
      <input
        value={valor}
        type="text"
        onChange={(e) => {
          setValor(e.target.value);
        }}
      />
      <button className="mx-2 my-3" onClick={setRespuesta(valor)}>
        {props.NameBotton ? props.NameBotton : "Aceptar"}
      </button>
      <br />
      <label>{respuesta}</label>
    </div>
  );
};
export default Formulario;
