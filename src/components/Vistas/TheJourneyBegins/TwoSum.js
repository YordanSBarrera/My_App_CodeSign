import { useState } from "react/cjs/react.development";
import { AddFunc } from "../../codeSignal/TheJourneyBegins";
import Formulario2Input from "../../Formulario2Input";

const TwoSum = () => {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [respuesta, setRespuesta] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setRespuesta(AddFunc(parseInt(num1), parseInt(num2)));
  };
  return (
    <Formulario2Input
      nameFormulario={"Add two Number"}
      setValue1={setNum1}
      setValue2={setNum2}
      nameButton={"Add"}
      respuesta={respuesta}
      value1={num1}
      value2={num2}
      handleSubmit={handleSubmit}
    />
  );
};

export default TwoSum;
