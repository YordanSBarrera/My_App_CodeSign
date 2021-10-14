import React, { useState } from "react";
//import Formulario from "../Formulario";

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
    <div className="container">
      <h3 className="text-muted">Seccion Palindrome</h3>
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
    </div>
  );
};
export default Palindrome;
