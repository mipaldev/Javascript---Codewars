const countSheeps = sheep => sheep.filter(countSheep => countSheep == true).length;

console.log(countSheeps([
  true, true, true, false
]));