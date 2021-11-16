import { useState } from "react";
import { CommonCharacterCountFunc } from "../../codeSignal/SmoothSailing";
import Formulario2Input from "../../Formulario2Input";

const CommonCharacterCount = () => {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">
        Given two strings, find the number of common characters between them.
      </p>
      <br />
      <h3>Example</h3>
      For s1 = "aabcc" and s2 = "adcaa", the output should be
      commonCharacterCount(s1, s2) = 3.
      <br />
      Strings have 3 common characters - 2 "a"s and 1 "c".
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setRespuesta(CommonCharacterCountFunc(value1, value2));
  };

  return (
    <div>
      <Formulario2Input
        nameFormulario={"Common Character Count"}
        setValue1={setValue1}
        setValue2={setValue2}
        nameButton={"Count"}
        respuesta={respuesta}
        value1={value1}
        value2={value2}
        handleSubmit={handleSubmit}
        info={info}
      />
    </div>
  );
};
export default CommonCharacterCount;
