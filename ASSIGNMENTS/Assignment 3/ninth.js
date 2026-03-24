// Rotate right by k positions; immutably return result.
const arr = [1, 2, 3, 4];
let k = 1;

k = k % arr.length;
const result = [];

for (let i = 0; i < arr.length; i++) {
  result[(i + k) % arr.length] = arr[i];
}

console.log(result);