/*

Function to change decimal to percentage

*/

const ToPercentage = number => {
  let newNumber;

  if (number) {
    number *= 100;

    number = Math.round(number * 100) / 100;

    newNumber = number.toString() + "%";

    return newNumber
  }

  return "-";
};

export default ToPercentage;
