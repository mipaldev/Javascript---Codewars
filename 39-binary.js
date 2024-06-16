// const binaryArrayToNumber = arr => {
//   return arr
//     .reverse()
//     .map((bit, idx) => bit * 2 ** idx)
//     .reduce((acc, curr) => acc + curr);
// }

const binaryArrayToNumber = arr => parseInt(arr.join(""), 2);

console.log(binaryArrayToNumber([0,0,1,1]));