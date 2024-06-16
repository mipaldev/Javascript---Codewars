const positiveSum = numbers => numbers.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);

console.log(positiveSum([1, 2, 3]));
