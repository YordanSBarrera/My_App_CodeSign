import { useState } from "react";
import Formulario1I from "../../Formulario1I";
//import { ExeciteNumber1 } from "../../codeSignal/ExtraTest1";
const P1E3 = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">
        Given a matrix of integers, we'd like to consider the sum of the
        elements within the area of a 45° rotated rectangle. More formally, the
        area is bounded by two diagonals parallel to the main diagonal and two
        diagonals parallel to the secondary diagonal. The dimensions of the
        rotated rectangle are defined by the number of elements along the
        borders of the rectangle. Given integers a and b representing the
        dimensions of the rotated rectangle, and matrix (a matrix of integers),
        your task is to find the greatest sum of integers contained within an a
        x b rotated rectangle. Note: The order of the dimensions is not
        important - consider all a x b and b x a rectangles.
      </p>
      <br />
      <h3>Example</h3>
      For matrix = [[1, 2, 3, 4, 0], [5, 6, 7, 8, 1], [3, 2, 4, 1, 4], [4, 3, 5,
      1, 6]] a = 2, and b = 3, the output should be solution(matrix, a, b) = 36.
      <br />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    //...
    setRespuesta(value1);
  };

  return (
    <div>
      <Formulario1I
        valorInial={value1}
        nameFormulario={"Prueba 1. Ejercicio 3"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"Button"}
      />
    </div>
  );
};

export default P1E3;
