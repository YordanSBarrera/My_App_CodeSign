//import Accordion from "../Accordion/Accordion";
const Borrar = () => {
  // function solution(a, b, k) {
  const a = [1, 2, 3, 7];
  // const b = [1, 2, 3];
  // const k = 31;
  // let tiny = 0;
  console.log(a);
  if (a.length <= 2) {
    console.log(a, "saLIO >2");
    return 0;
  }
  if (a.length === 3) {
    console.log(a, "saLIO ==3");
    if (a[0] < a[1] && a[1] < a[2]) {
      return 1;
    } else {
      return 0;
    }
  }
  let count = 0;
  let arr1 = 0;
  let arr2 = 0;
  let arr3 = 0;
  for (let i = 0; i < a.length - 2; i++) {
    arr1 += a[i];
    console.log(arr1, "ar1");
    for (let j = i + 1; j < a.length - 1; j++) {
      arr2 += a[j];
      console.log(arr2, "ar2");
      for (let k = j + 1; k < a.length; k++) {
        arr3 += a[k];
        console.log(arr3, "ar3");
        console.log(arr1, arr2, arr3);
        if (arr1 <= arr2 && arr2 <= arr3) {
          console.log("Sumooooo");
          count++;
        }
      }
    }
  }
  console.log("salio count");
  return count;
};

export default Borrar;
