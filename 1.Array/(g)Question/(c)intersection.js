// intersection of two array
function findIntersection(array1, array2) {
  const set1 = new Set(array1);
  return array2.filter((number) => set1.has(number));
};

const intersection = findIntersection([1, 2, 4, 5, 6], [2, 3, 5, 7]);
console.log(intersection);

// output:
// [ 2, 5 ]