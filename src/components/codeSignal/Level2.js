export const AlmostIncreasingSequence = () => {
  const sequence = [1, 2, 5, 3, 5];
  // const sequence = [1, 2, 3, 4, 5, 3, 5, 6];

  let out = 0;
  // let anterior = 0;
  if (sequence.length <= 2) {
    return true;
  }
  console.log("length: ", sequence.length);
  for (let x = 1; x < sequence.length; x++) {
    console.log("pos:", x, " Out:", out);
    if (sequence.length < x + 1) {
      return "true Se acabo";
    } else {
      ///////  (1)   ///////
      if (sequence[x - 1] >= sequence[x]) {
        console.log("verif (1)");
        if (out) {
          return "FALSO";
        }
        out = 1;
        if (x >= 2) {
          //////  (2)  //////
          if (sequence[x - 2] >= sequence[x]) {
            console.log("verif (2)");
            ///// (3A) /////
            if (sequence[x - 1] >= sequence[x + 1]) {
              console.log("verif (3)");
              return "falso caso werwer";
            } else {
              x += 2;
              out = x;
            }
          } else {
            console.log("verif (2F)");
            ////  (3B)  ////
            if (sequence[x] >= sequence[x + 1]) {
              if (sequence[x - 1] >= sequence[x + 1]) {
                return "[1.2.3.(1).2] falso";
              } else {
                x += 2;
                console.log(x);
                out = 4;
              }
            } else {
              out = 3;
            }
          }
        }
      }
    }
  }
  return "true bien";
};

export const addTwoDigits = (n) => {
  // console.log(n);
  return Math.floor(n / 10) + (n % 10);
};

export const matrixElementsSum = () => {
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
