import React, { useState } from "react";
import Formulario from "../Formulario";
import FormResp from "../FormResp";
import { CheckPalindromeFunc } from "../codeSignal/TheJourneyBegins";
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

  const esPalindrome = () => {
    setRespuesta(
      CheckPalindromeFunc(cadena)
        ? "True. this is a Palindrome"
        : "False: This is not a Palindrome"
    );
  };
  return (
    <div className="container">
      <Formulario
        valorInial={cadena}
        nameFormulario={"Given the string, check if it is a palindrome."}
        info={description}
        setValor={setCadena}
        exe={esPalindrome}
        respuesta={respuesta}
        nameButton={"Palindrome?"}
      />
      <FormResp resp={respuesta} />
    </div>
  );
};
export default Palindrome;
/**
 *  <h3 className="text-muted">Seccion Palindrome</h3>
      <input
        type="text"
        onChange={(e) => {
          setCadena(e.target.value);
        }}
      />
      <button className="mx-2 my-3" onClick={esPalindrome}>
        Palindrome?
      </button>
      <br />
      <label>{texto}</label>
 */
