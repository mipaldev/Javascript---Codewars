const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((acc, curr) => acc + curr);

console.log(arrayPlusArray([100, 300], [200]))