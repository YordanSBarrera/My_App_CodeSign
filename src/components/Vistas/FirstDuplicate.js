import { useState } from "react";
const FirstDuplicate = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">
        Given an array a that contains only numbers in the range from 1 to
        a.length, find the first duplicate number for which the second
        occurrence has the minimal index. In other words, if there are more than
        1 duplicated numbers, return the number for which the second occurrence
        has a smaller index than the second occurrence of the other number does.
        If there are no such elements, return -1.
      </p>
      <br />
      <h3>Example</h3>
      For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3. There
      are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a
      smaller index than the second occurrence of 2 does, so the answer is 3.
      <br />
      For a = [2, 2], the output should be solution(a) = 2;
      <br />
      For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.
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
        nameFormulario={"First Duplicate"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"Find"}
      />
    </div>
  );
};

export default FirstDuplicate;
