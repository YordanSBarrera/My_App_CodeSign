import { useState } from "react";
import { inStringOutNumberArray } from "../../codeSignal/FuncionesAux";
import { SortByHeightFunc } from "../../codeSignal/SmoothSailing";
import Formulario1I from "../../Formulario1I";
const SortByHeight = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">
        Some people are standing in a row in a park. There are trees between
        them which cannot be moved. Your task is to rearrange the people by
        their heights in a non-descending order without moving the trees. People
        can be very tall!
      </p>
      <br />
      <h3>Example</h3>
      For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
      solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
      <br />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    //SortByHeightFunc(inStringOutNumberArray(value1));
    setRespuesta(SortByHeightFunc(inStringOutNumberArray(value1)));
  };

  return (
    <div>
      <Formulario1I
        valorInial={value1}
        nameFormulario={"Sort by Height"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"SortByHeight"}
      />
    </div>
  );
};
export default SortByHeight;
