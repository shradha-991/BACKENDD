// Return an object mapping value → count.
const arr = ['a', 'b', 'a', 'c'];
const count = {};

for (let i = 0; i < arr.length; i++) {
  const val = arr[i];
  
  if (count[val]) {
    count[val]++;
  } else {
    count[val] = 1;
  }
}

console.log(count);