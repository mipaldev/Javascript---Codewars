// function repeatStr(n, s) {
//   result = '';
//   for (i = 1; i <= n; i++) {
//     result += s;
//   }
//   return result;
// };

const repeatStr = (n, s) => s.repeat(n);

console.log(repeatStr(5, 'Hello'));