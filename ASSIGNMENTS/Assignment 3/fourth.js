// Find minimum using reduce.

const arr = [7, 3, 9, 0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);
