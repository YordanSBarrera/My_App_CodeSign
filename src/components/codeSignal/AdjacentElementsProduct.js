import { useState } from "react";
import Formulario from "../Formulario";

const AdjacentElementsProduct = () => {
  const [array, setArray] = useState("[0,0]");
  const info = (
    <div>
      <h3>Example</h3>
      Given an array of integers, find the pair of adjacent elements that has
      the largest product and return that product.
      <br />
      Example For inputArray = [3, 6, -2, -5, 7, 3],
      <br />
      the output should be adjacentElementsProduct(inputArray) = 21. 7 and 3
      produce the largest product.
    </div>
  );
  const AEPrespuesta = (array) => {
    console.log(array);
    return "VACIO x AHORA " + { array };
  };
  /* const capturaVariable = (valor) => {
    const a = valor + " Esta es la Respuesta!!";
    return a;
  };

  /*
->>>
valorInial,nameFormulario,info,respuesta,setValor,nameButton
   <Formulario />
  */
  return (
    <div>
      <Formulario
        nameFormulario="AdjacentElementsProduct"
        valorInial={array}
        info={info}
        setValor={setArray}
        nameButton="Buscar AEProduct "
      />
    </div>
  );
};

export default AdjacentElementsProduct;
