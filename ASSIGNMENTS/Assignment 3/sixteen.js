// Build [start..end] numbers.
function range(start, end) {
  const result = [];

  if (start > end) return result;

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
}

console.log(range(3, 6));