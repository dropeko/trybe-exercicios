const multiply = (numbers, multiple) => {
  let newNumbers = [];
  numbers.forEach((number) => newNumbers.push(number * multiple));
  return newNumbers;
}

// console.log(multiply([1, 2, 3], 2));

module.exports = multiply;