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
export const SortByHeightFunc = () => {};

//13
export const ReverseInParenthesesFunc = () => {};
