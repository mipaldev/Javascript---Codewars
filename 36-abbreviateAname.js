const abbrevName = name => {
  return name
    .split(" ")
    .map((x) => x[0].toUpperCase())
    .join(".");
}

console.log(abbrevName("muhammad asep"));