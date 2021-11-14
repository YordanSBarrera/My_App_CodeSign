import { useState } from "react";
import { inStringOutMatrix } from "../../codeSignal/FuncionesAux";
import Formulario1I from "../../Formulario1I";
import { MatrixElementsSumFunc } from "../../codeSignal/EdgeOfTheOcean";
const MatrixElementsSum = () => {
  const [matrix, setMatrix] = useState([
    [0, 0],
    [0, 0],
  ]);
  const [respuesta, setRespuesta] = useState("");
  const info = (
    <div>
      <p>
        Given matrix, a rectangular matrix of integers, where each value
        represents the cost of the room, your task is to return the total sum of
        all rooms that are suitable for the CodeBots (ie: add up all the values
        that don't appear below a 0).
      </p>
      <h3>Example</h3>
      For matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]
      <br />
      the output should be matrixElementsSum(matrix) = 9.
    </div>
  );
  const handleSubmit = (e) => {
    e.preventDefault();

    // inStringOuMatrix(matrix);

    setRespuesta(MatrixElementsSumFunc(inStringOutMatrix(matrix)));
    //);
  };
  return (
    <div>
      MatrixElementsSum
      <Formulario1I
        valorInial={matrix}
        nameFormulario={""}
        info={info}
        setValue={setMatrix}
        respuesta={respuesta}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default MatrixElementsSum;
