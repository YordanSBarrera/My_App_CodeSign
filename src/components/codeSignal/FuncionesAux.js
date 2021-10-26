export const inStringOutArray = (stringValue) => {
  let array = [];
  console.log(stringValue + "stringValue");
  let checkNumeroAnterior = false;
  for (let index = 0; index < stringValue.length; index++) {
    if (!isNaN(stringValue[index])) {
      if (!checkNumeroAnterior) {
        array.push(parseInt(stringValue[index]));
      } else {
        let aux = array[array.length - 1] * 10 + parseInt(stringValue[index]);
        array[array.length - 1] = aux;
      }
      checkNumeroAnterior = true;
    } else {
      checkNumeroAnterior = false;
    }
  }
  console.log(array);
  return array;
};
