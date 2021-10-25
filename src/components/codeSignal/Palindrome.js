import React, { useState } from "react";
import Formulario from "../Formulario";
import FormResp from "../FormResp";
const Palindrome = () => {
  const [cadena, setCadena] = useState("");
  const [texto, setTexto] = useState("Entre una Cadena");
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

  function esPalindrome() {
    console.log(cadena.length);
    for (let i = 0; i < cadena.length / 2; i++) {
      console.log(cadena[i], i);
      console.log(cadena[cadena.length - i - 1]);
      if (cadena[i] !== cadena[cadena.length - i - 1]) {
        return setTexto("false, no es Palindrome");
      }
    }
    return setTexto("Verdadero,es palindrome");

    // Given the string, check if it is a palindrome.

    // setTexto(addTwoDigits(cadena));
  }
  return (
    <div className="container">
      <Formulario
        valorInial={texto}
        nameFormulario={"Given the string, check if it is a palindrome."}
        info={description}
        setValor={setCadena}
        nameButton={"Palindrome?"}
      />
      <FormResp resp={esPalindrome} />
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
