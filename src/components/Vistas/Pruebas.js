import { useState } from "react";
import {
  deletePostInArray,
  inStringOutNumberArray,
} from "../codeSignal/FuncionesAux";
import Formulario2Input from "../Formulario2Input";
const Pruebas = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">To test</p>
      <br />
      <h3>Example</h3>
      [1,2,3,4,5,6,7,8,9,0]
      <br />
      primer imput un array segundo post para eliminar un elemento....
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inStringOutNumberArray(value1));
    let arrayNeuvo = deletePostInArray(
      parseInt(value2) - 1,
      inStringOutNumberArray(value1)
    );

    //inStringOutNumberArray(value1).splice(parseInt(value2), 1);
    //.pop(parseInt(value2));
    //...
    setRespuesta(arrayNeuvo);
    // setValue1(arrayNeuvo);
    console.log(parseInt(value2));
    console.log(arrayNeuvo);
  };

  return (
    <div>
      <Formulario2Input
        nameFormulario={"my test"}
        setValue1={setValue1}
        setValue2={setValue2}
        nameButton={"test"}
        respuesta={respuesta}
        value1={value1}
        value2={value2}
        handleSubmit={handleSubmit}
        info={info}
      />
    </div>
  );
};

export default Pruebas;
