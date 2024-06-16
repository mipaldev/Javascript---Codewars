const oddOrEven = arr => arr.reduce((acc, curr,) => acc + curr, 0) % 2 == 0 ? "even" : "odd";

console.log(oddOrEven([0]));