const getCount = str => (str.match(/[aiueo]/g) || []).length;

console.log(getCount('alhamdulillah'));