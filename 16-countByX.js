// function countBy(x, n) {
//   let result = [];
//   for (i = x; x <= n; x++)  {
//     result.push(i * x);
//   }
//   return result;
// }


const countBy = (x, n) => [...Array(n)].map((_, idx) => (idx + 1) * x);

console.log(countBy(2, 5));