import { useState } from "react";
import Formulario from "../Formulario";
import { inStringOutArray } from "./FuncionesAux";

const AdjacentElementsProduct = () => {
  const [array, setArray] = useState("0,0");
  const [resp, setResp] = useState("???");
  // console.log(array);
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

  // const getNumbersInString=(string) =>{
  //   var tmp = string.split("");
  //   var map = tmp.map(function(current) {
  //     if (!isNaN(parseInt(current))) {
  //       return current;
  //     }
  //   });
  const AEProduct = () => {
    // console.log("-->" + !isNaN(array[0]) + " " + array[0]);
    const valorAChequiar = inStringOutArray(array);
    console.log(valorAChequiar);
    //  console.log(array);
    let result = Number.NEGATIVE_INFINITY;
    for (let index = 2; index <= valorAChequiar.length; index++) {
      const product = valorAChequiar[index - 1] * valorAChequiar[index];
      if (result < product) {
        result = product;
      }
    }
    console.log(result);
    setResp(result);
  };
  return (
    <div>
      <Formulario
        nameFormulario="AdjacentElementsProduct"
        valorInial={array}
        info={info}
        setValor={setArray}
        nameButton="Buscar AEProduct "
        respuesta={resp}
        exe={AEProduct}
      />
    </div>
  );
};

export default AdjacentElementsProduct;
