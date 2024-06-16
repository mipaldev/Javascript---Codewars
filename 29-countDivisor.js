function getDivisorsCnt(n) {
  let divisorCount = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i * i === n) {
        divisorCount++;
      } else {
        divisorCount += 2;
      }
    }
  }
  return divisorCount;
}

console.log(getDivisorsCnt(100));