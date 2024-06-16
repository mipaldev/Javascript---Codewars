function findUniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
}

console.log(findUniq([1, 1, 0.3,1,1,1]));
