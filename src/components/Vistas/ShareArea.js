import { useState } from "react";
import { ShapeAreaFunc } from "../codeSignal/EdgeOfTheOcean";
import { getNumbersInString } from "../codeSignal/FuncionesAux";
import Formulario from "../Formulario";

const ShareArea = () => {
  const [n, setN] = useState("0");
  const [respuesta, setRespuesta] = useState("0");
  const info = (
    <div>
      <p className="text-muted font-italic">
        A 1-interesting polygon is just a square with a side of length 1. An
        n-interesting polygon is obtained by taking the n - 1-interesting
        polygon and appending 1-interesting polygons to its rim, side by side.
        You can see the 1-, 2-, 3- and 4-interesting polygons in the picture
        below.
      </p>
      <br />
      <h3>Example</h3>
      For n = 2, the output should be shapeArea(n) = 5;
      <br />
      For n = 3, the output should be shapeArea(n) = 13.
    </div>
  );
  const functShareArea = () => {
    console.log("share area-> " + getNumbersInString(n));

    setRespuesta(ShapeAreaFunc(getNumbersInString(n)));
  };

  return (
    <div>
      SHARE AREA
      <Formulario
        valorInial={n}
        nameFormulario={"Share Area"}
        info={info}
        setValor={setN}
        exe={functShareArea}
        respuesta={
          "n=" + getNumbersInString(n) + " --> ShareArea: " + respuesta
        }
        nameButton={"Share Area"}
      />
    </div>
  );
};
export default ShareArea;
