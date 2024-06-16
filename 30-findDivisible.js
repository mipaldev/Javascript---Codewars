// function divisibleBy(numbers, divisor) {
//   let arr = [];
//   numbers.forEach(element => {
//     if (element % divisor == 0) arr.push(element);
//   });
//   return arr;
// }

const divisibleBy = (numbers, divisor) => numbers.filter(Element => Element % divisor == 0);


console.log(divisibleBy([1, 5, 6, 10], 2));