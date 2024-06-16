const min = list => Math.min(...list);


const max = list => {
  maxValue = 0;
  for (i = 1; i < list.length; i++) {
    if (list[i] > maxValue) maxValue = list[i];
  }
  return maxValue
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));

console.log(max([-52, 56, 30, 29, -54, 0, -110]));
