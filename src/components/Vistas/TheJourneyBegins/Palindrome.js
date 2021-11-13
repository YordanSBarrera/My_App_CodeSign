import React, { useState } from "react";
import Formulario1I from "../../Formulario1I";
import { CheckPalindromeFunc } from "../../codeSignal/TheJourneyBegins";

const Palindrome = () => {
  const [cadena, setCadena] = useState("Entre una Cadena");
  const [respuesta, setRespuesta] = useState("");

  const description = (
    <div>
      <h2> Example</h2>
      <ul>
        <li>
          For inputString = "aabaa", the output should be
          checkPalindrome(inputString) = true;
          <br />
        </li>
        <li>
          For inputString = "abac", the output should be
          checkPalindrome(inputString) = false;
          <br />
        </li>
        <li>
          For inputString = "a", the output should be
          checkPalindrome(inputString) = true.
        </li>
      </ul>
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("cadena..>", cadena);
    const resp = CheckPalindromeFunc(cadena)
      ? "True. this is a Palindrome"
      : "False: This is not a Palindrome";
    setRespuesta(resp);
  };

  return (
    <div className="container">
      <Formulario1I
        valorInial={cadena}
        nameFormulario={"Given the string, check if it is a palindrome."}
        info={description}
        setValue={setCadena}
        respuesta={respuesta}
        nameButton={"Palindrome?"}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default Palindrome;
