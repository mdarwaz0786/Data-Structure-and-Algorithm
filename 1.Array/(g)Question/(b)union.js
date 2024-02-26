// union of two array
function unionArray(array1, array2) {
  const set1 = new Set(array1);
  const set2 = new Set(array2);
  const result = [...new Set([...set1, ...set2])];
  return result;
};

const union = unionArray([1, 2, 2, 2, 3], [2, 3, 3, 4, 5, 5]);
console.log(union);

// Output:
// [ 1, 2, 3, 4, 5 ]
