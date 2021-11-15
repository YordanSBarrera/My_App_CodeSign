import { useState } from "react";
import { ReverseInParenthesesFunc } from "../../codeSignal/SmoothSailing";
import Formulario1I from "../../Formulario1I";

const ReverseInParentheses = () => {
  const [value1, setValue1] = useState();
  const [respuesta, setRespuesta] = useState();
  const info = (
    <div>
      <p className="text-muted font-italic">
        Write a function that reverses characters in (possibly nested)
        parentheses in the input string. Input strings will always be
        well-formed with matching ()s.
      </p>
      <br />
      <h3>Example</h3>
      For inputString = "(bar)", the output should be solution(inputString) =
      "rab";
      <br />
      For inputString = "foo(bar)baz", the output should be
      solution(inputString) = "foorabbaz";
      <br />
      For inputString = "foo(bar)baz(blim)", the output should be
      solution(inputString) = "foorabbazmilb";
      <br />
      For inputString = "foo(bar(baz))blim", the output should be
      solution(inputString) = "foobazrabblim". Because "foo(bar(baz))blim"
      becomes "foo(barzab)blim" and then "foobazrabblim".
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    setRespuesta(ReverseInParenthesesFunc(value1));
  };

  return (
    <div>
      <Formulario1I
        valorInial={value1}
        nameFormulario={"Reverse in Parentheses"}
        info={info}
        setValue={setValue1}
        handleSubmit={handleSubmit}
        respuesta={respuesta}
        nameButton={"ReverseInParentheses"}
      />
    </div>
  );
};
export default ReverseInParentheses;
