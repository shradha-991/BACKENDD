// Produce reversed array without .reverse(). Return new array (immutable).
const arr = [1, 2, 3];
const reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversed.push(arr[i]);
}

console.log(reversed);