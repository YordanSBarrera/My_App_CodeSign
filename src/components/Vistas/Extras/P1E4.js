import { useState } from "react";
import Formulario1I from "../../Formulario1I";
//import { ExeciteNumber1 } from "../../codeSignal/ExtraTest1";
const P1E4 = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">
        Given an array of non-negative integers arr, your task is to find the
        number of ways it can be split into three non-empty contiguous subarrays
        such that the sum of the elements in the first subarray is less than or
        equal to the sum of the elements in the second subarray, and the sum of
        the elements in the second subarray is less than or equal to the sum of
        the elements in the third subarray. Note: Each element of arr must
        appear in exactly one of the three contiguous subarrays. Although the
        given numbers are 32-bit integers, the sum of the elements may exceed
        the limits of the 32-bit integer type.
      </p>
      <h3>Example</h3>
      For arr = [1, 1, 1], the output should be solution(arr) = 1. The only way
      to split this array into three non-empty contiguous subarrays is [1], [1],
      [1]. This triple of subarrays satisfies the conditions (1 ≤ 1 ≤ 1), so the
      answer is 1. <br />
      For arr = [1, 2, 0], the output should be solution(arr) = 0.
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
        nameFormulario={"Prueba 1. Ejercicio 4"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"Button"}
      />
    </div>
  );
};

export default P1E4;
