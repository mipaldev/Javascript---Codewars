const reverseSeq = n => {
  let newN = [];
  for (i = n; i > 0; i--) {
    newN.push(i);
  }
  return newN;
};

console.log(reverseSeq(5));