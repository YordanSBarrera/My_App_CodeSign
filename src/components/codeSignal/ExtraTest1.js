export const ExeciteNumber1 = (n, a) => {
  let b = [];
  if (n < 2) {
    return a;
  }
  b.push(0 + a[0] + a[1]);
  for (let i = 1; i < n - 1; i++) {
    let aux = a[i - 1] + a[i] + a[i + 1];
    b.push(aux);
  }
  b.push(a[n - 2] + a[n - 1] + 0);
  return b;
};
export const ExeciteNumber2 = (a, b, k) => {
  let tiny = 0;
  for (let i = 0; i < a.length; i++) {
    let aux = a[i].toString() + b[b.length - 1 - i].toString();
    if (parseInt(aux) < k) {
      tiny += 1;
    }
  }
  return tiny;
};
