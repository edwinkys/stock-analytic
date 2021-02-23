/*

Function to substitute big numbers with letter

*/

// Rounding function
const Round = number => {
  return Math.round(number * 10) / 10;
}

const BigDecimal = number => {
  let newNumber;

  if (number) {
    if (number >= 1000 && number < 1_000_000) {
      number /= 1000;
      number = Round(number);
      newNumber = number.toString() + "K";
    }

    else if (number >= 1_000_000 && number < 1_000_000_000) {
      number /= 1_000_000;
      number = Round(number);
      newNumber = number.toString() + "M";
    }

    else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
      number /= 1_000_000_000;
      number = Round(number);
      newNumber = number.toString() + "B";
    }

    else if (number >= 1_000_000_000_000) {
      number /= 1_000_000_000_000;
      number = Round(number);
      newNumber = number.toString() + "T";
    }

    else {
      newNumber = number.toString();
    }

    return newNumber;
  }

  return "-";
};

export default BigDecimal;
