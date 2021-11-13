import { useState } from "react";
import Formulario from "../../Formulario1I";
import { inStringOutArray } from "../../codeSignal/FuncionesAux";
import { AdjacentElementsProductFunc } from "../../codeSignal/EdgeOfTheOcean";

const AdjacentElementsProduct = () => {
  const [array, setArray] = useState("0,0");
  const [resp, setResp] = useState("");
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setResp(AdjacentElementsProductFunc(inStringOutArray(array)));
  };
  return (
    <div>
      <Formulario
        nameFormulario="AdjacentElementsProduct"
        valorInial={array}
        info={info}
        setValue={setArray}
        nameButton="Buscar AEProduct "
        respuesta={resp}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdjacentElementsProduct;
