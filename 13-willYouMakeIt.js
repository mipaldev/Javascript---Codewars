const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;

console.log(zeroFuel(100, 50, 2));
