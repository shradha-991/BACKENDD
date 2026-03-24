// Remove false, 0, '', null, undefined, NaN.
const arr = [0, 1, false, 2, '', 3, null];
const result = arr.filter(Boolean);
console.log(result);