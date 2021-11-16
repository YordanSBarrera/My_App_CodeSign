import { useState } from "react";
import { IsLuckyFunc } from "../../codeSignal/SmoothSailing";
import Formulario1I from "../../Formulario1I";

const IsLucky = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState("");
  const info = (
    <div>
      <p className="text-muted font-italic">
        Ticket numbers usually consist of an even number of digits. A ticket
        number is considered lucky if the sum of the first half of the digits is
        equal to the sum of the second half. Given a ticket number n, determine
        if it's lucky or not.
      </p>
      <br />
      <h3>Example</h3>
      For n = 1230, the output should be solution(n) = true; For n = 239017, the
      output should be solution(n) = false.
      <br />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(IsLuckyFunc(value1));
    setRespuesta(IsLuckyFunc(value1) ? "True" : "False");
  };

  return (
    <div>
      <Formulario1I
        valorInial={value1}
        nameFormulario={"Is Lucky"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"IsLucky"}
      />
    </div>
  );
};
export default IsLucky;
