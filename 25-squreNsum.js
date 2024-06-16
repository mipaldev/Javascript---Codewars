// const squareSum = numbers => numbers.map(num => num * num).reduce((acc, curr) => acc + curr, 0);

const squareSum = numbers => numbers.reduce((acc, curr) => acc + (curr * curr), 0);


console.log(squareSum([1, 2, 3]));