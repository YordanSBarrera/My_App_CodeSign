import { useState } from "react/cjs/react.development";
import { AddFunc } from "../codeSignal/TheJourneyBegins";
import Formulario2Input from "../Formulario2Input";

const TwoSum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resp, setResp] = useState(0);
  const TS_exe = () => {
    setResp(AddFunc(parseInt(num1), parseInt(num2)));
  };
  return (
    <Formulario2Input
      setValor={setNum1}
      setValor2={setNum2}
      nameButton={"Sumar"}
      exe={TS_exe}
      respuesta={resp}
    />
  );
};

export default TwoSum;
