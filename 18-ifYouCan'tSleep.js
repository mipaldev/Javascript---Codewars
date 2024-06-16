const countSheep = num => {
  let sheep = ''; 
  for (i = 1; i <= num; i++) {
    sheep += `${i} sheep...`;
  }
  return sheep;
};

console.log(countSheep(5));