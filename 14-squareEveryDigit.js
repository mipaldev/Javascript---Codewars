// const squareDigits = num => {
//   let squareDigits = num
//     .toString()
//     .split("")
//     .map((newNum) => Math.pow(newNum, 2)).join('');

//   return parseFloat(squareDigits);
// };

const squareDigits = num =>
  parseFloat(
    num
      .toString()
      .split("")
      .map(newNum => newNum * newNum)
      .join("")
  );


console.log(squareDigits(12345));