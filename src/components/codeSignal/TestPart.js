import { deletePostInArray } from "./FuncionesAux";

export const FirstDuplicateFunc = (arr) => {
  let a = arr;
  let resp = -1;
  for (let i = 0; i < arr.length; i++) {
    a = deletePostInArray(i, a);
    for (let k = i + 1; k < a.length; k++) {
      if (a[i] === a[k]) {
        if (resp === -1) {
          resp = k;
        } else {
          if (resp > k) {
            resp = k;
          }
        }
      }
    }
  }
  if (resp === -1) {
    return -1;
  }
  return a[resp];
};
