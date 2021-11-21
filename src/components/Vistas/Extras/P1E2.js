import { useState } from "react";
import Formulario1I from "../../Formulario1I";
import { ExeciteNumber1 } from "../../codeSignal/ExtraTest1";
const P1E2 = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">
        You are given two arrays of integers a and b of the same length, and an
        integer k. We will be iterating through array a from left to right, and
        simultaneously through array b from right to left, and looking at pairs
        (x, y), where x is from a and y is from b. Such a pair is called tiny if
        the concatenation xy is strictly less than k. Your task is to return the
        number of tiny pairs that you'll encounter during the simultaneous
        iteration through a and b.
      </p>
      <br />
      <h3>Example</h3>
      For a = [1, 2, 3], b = [1, 2, 3], and k = 31, the output should be
      solution(a, b, k) = 2. We're considering the following pairs during
      iteration: (1, 3). Their concatenation equals 13, which is less than 31,
      so the pair is tiny; (2, 2). Their concatenation equals 22, which is less
      than 31, so the pair is tiny; (3, 1). Their concatenation equals 31, which
      is not less than 31, so the pair is not tiny. As you can see, there are 2
      tiny pairs during the iteration, so the answer is 2. For a = [16, 1, 4, 2,
      14], b = [7, 11, 2, 0, 15], and k = 743, the output should be solution(a,
      b, k) = 4.
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
        nameFormulario={"Prueba 1. Ejercicio 2"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"Button"}
      />
    </div>
  );
};

export default P1E2;
