import React, { useState } from "react";
//import { addTwoDigits } from "./level2";

const Palindrome = () => {
  const [cadena, setCadena] = useState("");
  const [texto, setTexto] = useState("Entre una Cadena");
  const esPalindrome = () => {
    console.log(cadena.length);
    for (let i = 0; i < cadena.length / 2; i++) {
      console.log(cadena[i], i);
      console.log(cadena[cadena.length - i - 1]);
      if (cadena[i] !== cadena[cadena.length - i - 1]) {
        return setTexto("false, no es Palindrome");
      }
    }
    return setTexto("Verdadero,es palindrome");

    // setTexto(addTwoDigits(cadena));
  };
  return (
    <div>
      <p className="text-muted">Seccion Palindrome</p>
      <input
        type="text"
        onChange={(e) => {
          setCadena(e.target.value);
        }}
      />
      <button onClick={esPalindrome}>Palindrome?</button>
      <br />
      <label>{texto}</label>
    </div>
  );
};
export default Palindrome;
