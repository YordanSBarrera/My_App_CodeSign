export const inStringOutArray = (stringValue) => {
  let array = [];
  console.log(stringValue + "stringValue");
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
        console.log(stringValue[index] + "<-entro");
      } else {
        if (!checkNumeroAnterior) {
          //si no tiene numero antes...
          checkNumeroAnterior = true;
          console.log("->" + stringValue[index] + "<-");
          //si el valor es espacio lo toma como no Numero.

          //agregando al array el numero
          console.log(stringValue[index]);
          //si es negativo
          if (checkNumeroNegative) {
            console.log(
              stringValue[index] + "<!!!!>" + -parseInt(stringValue[index])
            );
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
  console.log(stringValue);
  console.log(array);
  return array;
};

export const getNumbersInString = (string) => {
  /*  var tmp = string.split("");
  var map = tmp.map(function (current) {
    if (!isNaN(parseInt(current))) {
      return current;
    }
  });

  var numbers = map.filter(function (value) {
    return value !== undefined;
  });

  return numbers.join("");*/
};
