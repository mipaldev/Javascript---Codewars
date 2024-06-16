// const summation = function (num) {
//   let x = [];
//   for (i = 1; i <= num; i++) {
//     x.push(i);
//   }
//   return x.reduce((acc, curr) => acc + curr);
// };

const summation = (n) => (n * (n + 1)) / 2;

console.log(summation(2));
