// Split into subarrays of length n.
const arr = [1, 2, 3, 4, 5];
const n = 2;

const result = [];

for (let i = 0; i < arr.length; i += n) {
  result.push(arr.slice(i, i + n));
}

console.log(result);