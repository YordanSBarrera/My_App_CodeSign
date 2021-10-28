export const AddFunc = (numero1, numero2) => {
  return parseInt(numero1) + parseInt(numero2);
};

export const CenturyFromYearFunc = (year) => {
  const resp = Math.trunc(year / 100);
  if (year % 100 === 0) {
    return resp;
  } else {
    return resp + 1;
  }
};
export const CheckPalindromeFunc = (cadena) => {
  for (let i = 0; i < cadena.length / 2; i++) {
    if (cadena[i] !== cadena[cadena.length - i - 1]) {
      return false;
    }
  }

  return true;
};
