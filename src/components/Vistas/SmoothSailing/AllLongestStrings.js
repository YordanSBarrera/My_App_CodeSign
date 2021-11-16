import { useState } from "react";
import {
  inArrayOutString,
  inStringOutArray,
} from "../../codeSignal/FuncionesAux";
import { AllLongestStringsFunc } from "../../codeSignal/SmoothSailing";
import Formulario1I from "../../Formulario1I";

const AllLongestStrings = () => {
  const [array, setArray] = useState("");
  const [respuesta, setRespuesta] = useState("");
  const info = (
    <div>
      <p className="text-muted font-italic">
        Given an array of strings, return another array containing all of its
        longest strings.
      </p>
      <br />
      <h3>Example</h3>
      For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
      allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
      <br />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = AllLongestStringsFunc(inStringOutArray(array));
    setRespuesta(inArrayOutString(v));
  };

  return (
    <div>
      <Formulario1I
        //valorInial={n}
        nameFormulario={"All Longest Strings"}
        info={info}
        setValue={setArray}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"Search"}
      />
    </div>
  );
};

export default AllLongestStrings;
