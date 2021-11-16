export const inStringOutNumberArray = (stringValue) => {
  let array = [];
  // console.log(stringValue + "stringValue");
  let checkNumeroAnterior = false;
  let checkNumeroNegative = false;
  for (let index = 0; index < stringValue.length; index++) {
    //si es numero....
    if (!isNaN(stringValue[index])) {
      // si es numero
      if (stringValue[index] === " ") {
        //si el parametro es " " espacio
        checkNumeroAnterior = false;
        checkNumeroNegative = false;
        // console.log(stringValue[index] + "<-entro");
      } else {
        if (!checkNumeroAnterior) {
          //si no tiene numero antes...
          checkNumeroAnterior = true;
          // console.log("->" + stringValue[index] + "<-");
          //si el valor es espacio lo toma como no Numero.

          //agregando al array el numero
          //console.log(stringValue[index]);
          //si es negativo
          if (checkNumeroNegative) {
            /* console.log(
              stringValue[index] + "<!!!!>" + -parseInt(stringValue[index])
            );*/
            array.push(-parseInt(stringValue[index]));
            checkNumeroNegative = false;
          } else {
            //si el valor es positivo se agrega normalmente
            array.push(parseInt(stringValue[index]));
          }
        } else {
          //si es un numero de mas de 1 cifra  hay k conformarlo
          const aux =
            array[array.length - 1] * 10 + parseInt(stringValue[index]);
          array[array.length - 1] = aux;
        }
      }
    } else {
      checkNumeroAnterior = false;
    }

    //para chequear si el numero es negativo
    if (stringValue[index] === "-") {
      checkNumeroNegative = true;
    } else {
      checkNumeroNegative = false;
    }
  }
  //console.log(stringValue);
  // console.log(array);
  return array;
};

export const getNumbersInString = (stringIn) => {
  const respuesta = stringIn.replace(/\D/g, "");
  return respuesta;
};

export const inStringOutMatrix = (stringIn) => {
  let trosos = stringIn.split("]");
  let matrix = [];
  console.log(trosos);
  trosos.forEach((element) => {
    const valueAux = inStringOutNumberArray(element);
    if (valueAux.length > 1) {
      matrix.push(valueAux);
    }
  });
  // console.log(matrix.length, matrix);
  return matrix;
};

//arreglar
export const printMatrix = (matrix) => {
  //const valueReturn = matrix;
  console.log("print");
  return (
    <div>
      {matrix.map((elemt) => {
        return (
          <div>
            {" "}
            {elemt}
            <br />
          </div>
        );
      })}
    </div>
  );
};

//entra una cadena y un cliterio sale array.
export const inStringCliterioOutArray = (stringIn, criterio) => {
  console.log(stringIn, criterio);
  let trosos = stringIn.split(criterio);
  let matrix = [];
  trosos.forEach((element) => {
    const valueAux = inStringOutArray(element);
    if (valueAux.length > 1) {
      matrix.push(valueAux);
    }
  });
  console.log(matrix);
  return matrix;
};

export const inArrayOutString = (array) => {
  let stringValor = "[";
  array.forEach((element) => {
    stringValor = stringValor + " " + element;
  });
  stringValor = stringValor + " ]";
  console.log(stringValor);
  return stringValor;
};

// se separa por las comas.
export const inStringOutArray = (stringIn) => {
  let valor = stringIn.split(",");

  return valor;
};

export const inStrinOutStringReverse = (cadena) => {
  let valueAux = cadena.split("");
  let arrayAux = valueAux.reverse();
  let joinAux = arrayAux.join("");
  return joinAux;
};
