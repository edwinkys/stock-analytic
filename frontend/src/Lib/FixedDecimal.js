/*

Function to fixed the number of decimal points

*/

const FixedDecimal = number => {
  if (number) {
    return number.toFixed(2);
  }

  return '-';
};

export default FixedDecimal;
