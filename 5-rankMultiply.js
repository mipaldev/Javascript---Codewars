const multiply = number => number * (5 ** Math.abs(number).toString().length);
console.log(multiply(-10));