function password(str) {
  return str.length >= 8 &&
    /\d/.test(str) &&
    /[a-z]/.test(str) &&
    /[A-Z]/.test(str);
}


console.log(password('Abc12345678'));