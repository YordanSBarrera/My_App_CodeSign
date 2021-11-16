//9...
export const AllLongestStringsFunc = (array) => {
  let valor = [];
  let max = 0;

  array.forEach((element) => {
    if (element.length > max) {
      max = element.length;
    }
  });
  for (let index = 0; index < array.length; index++) {
    if (array[index].length === max) {
      valor.push(array[index]);
    }
  }
  return valor;
};

//10
export const CommonCharacterCountFunc = (string1, string2) => {
  let contador = 0;
  let valor1 = "";
  let valor2 = "";
  if (string1.length > string2.length) {
    valor1 = string2;
    valor2 = string1;
  } else {
    valor1 = string1;
    valor2 = string2;
  }
  for (let index = 0; index < valor1.length; index++) {
    if (valor2.includes(valor1[index])) {
      contador++;
      valor2 = valor2.replace(valor1[index], "");
    }
  }
  return contador;
  // String.prototype.count = function (s1) {
  //     return (
  //       (this.length - this.replace(new RegExp(s1, "g"), "").length) / s1.length
  //     );
  //   };
};

//11
export const IsLuckyFunc = (number) => {
  let value1 = 0;
  let value2 = 0;
  for (let i = 0; i < number.length / 2; i++) {
    console.log(value1, value2);
    value1 += parseInt(number[i]);
    value2 += parseInt(number[number.length - 1 - i]);
  }
  console.log(value1, value2);
  if (value1 === value2) {
    return true;
  }
  return false;
};

//12
export const SortByHeightFunc = (array) => {
  let arrayCopia = [];
  let respuesta = [];
  array.forEach((element) => {
    console.log(element);
    if (element !== -1) {
      arrayCopia.push(element);
    }
  });
  arrayCopia.sort(function (a, b) {
    return a - b;
  });
  console.log(arrayCopia);

  for (let index = 0, ac = 0; index < array.length; index++) {
    if (array[index] === -1) {
      respuesta.push(-1);
    } else {
      respuesta.push(arrayCopia[ac]);
      ac++;
    }
  }
  return respuesta;
};

//13

export const ReverseInParenthesesFunc = (cadena) => {
  let auxStr = [];
  let len = cadena.length;
  for (let i = 0; i < len; i++) {
    if (cadena[i] === "(") {
      auxStr.push(i);
    } else if (cadena[i] === ")") {
      let A = [...cadena];
      Reverse(A, auxStr[auxStr.length - 1] + 1, i);
      cadena = [...A];
      auxStr.pop();
    }
  }
  let res = "";
  for (let i = 0; i < len; i++) {
    if (cadena[i] !== ")" && cadena[i] !== "(") {
      res += cadena[i];
    }
  }
  return res;
};
const Reverse = (A, l, h) => {
  if (l < h) {
    let ch = A[l];
    A[l] = A[h];
    A[h] = ch;
    Reverse(A, l + 1, h - 1);
  }
};
