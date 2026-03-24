// Implement indexOf manually (return -1 if not found).
const arr = ['a', 'b', 'c'];
const target = 'b';

let index = -1;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    index = i;
    break;
  }
}

console.log(index);