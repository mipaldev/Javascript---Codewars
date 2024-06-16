// function basicOp(operation, value1, value2) {
//   if (operation == '+') return value1 + value2;
//   if (operation == "-") return value1 - value2;
//   if (operation == "*") return value1 * value2;
//   if (operation == "/") return value1 / value2;
// };

const basicOp = (o, v1, v2) => eval(v1 + o + v2);

console.log(basicOp("+", 5, '5'));
console.log(basicOp("-", 5, 5));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 5, 5));