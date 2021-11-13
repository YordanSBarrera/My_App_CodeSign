//exercise #4
export const AdjacentElementsProductFunc = (array) => {
  console.log(array.length);

  let result = Number.NEGATIVE_INFINITY;

  if (array.length > 2) {
    for (let index = 1; index <= array.length; index++) {
      const product = array[index - 1] * array[index];
      if (result < product) {
        result = product;
      }
    }
  } else {
    if (array.length === 1) {
      result = array[0];
    } else {
      if (array.length === 2) {
        result = array[0] * array[1];
      }
    }
  }
  return result;
};
//exercise #5
export const ShapeAreaFunc = (n) => {
  return n * n + (n - 1) * (n - 1);
};
//exercise #6
export const Make_Array_Consecutive_2Func = (Array) => {
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  Array.forEach((element) => {
    if (element > max) {
      max = element;
    }
    if (element < min) {
      min = element;
    }
  });
  return max - min + 1 - Array.length;
};
//exercise #7
export const AlmostincreasingSequenceFunc = (Array) => {
  //let valor = 0;
  let check = false;
  for (let index = 1; index < Array.length; index++) {
    console.log("i..>", Array[index]);
    if (Array[index - 1] >= Array[index]) {
      if (check) {
        return "false";
      } else {
        check = true;
        if (1 < index) {
          console.log("i-", index, " l..>", Array.length);
          if (Array[index - 1] >= Array[index + 1]) {
            return "false";
          }
        }
      }
    }
  }
  return "true";
};
//exercise #8
export const MatrixElementsSum = () => {
  /*******************
     REPARAR   &&& Ajustar
     **************** */
  const matrix = [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ];
  let count = 0;
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      //  console.log("M[y][x]: ", matrix[y][x], "x: ", x, "y: ", y);
      if (matrix[y][x]) {
        count += matrix[y][x];
        //  console.log(count);
      } else {
        break;
      }
    }
  }
  return count;
};
