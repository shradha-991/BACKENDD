// Create array by alternating elements: [a1,a2] with [b1,b2] → [a1,b1,a2,b2]. If lengths differ, append rest.
const a = [1, 2];
const b = [10, 20];

const result = [];
const max = Math.max(a.length, b.length);

for (let i = 0; i < max; i++) {
  if (i < a.length) result.push(a[i]);
  if (i < b.length) result.push(b[i]);
}

console.log(result);