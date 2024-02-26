// find second maximum element
function findSecondMax(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let secondMax;
  for (let i = sortedArray.length - 1; i >= 0; i--) {
    if (i > 0 && sortedArray[i] !== sortedArray[i - 1]) {
      secondMax = sortedArray[i - 1];
      break;
    };
  };
  return secondMax;
};

const secondMax = findSecondMax([1, 2, 2, 3, 5, 5, 3, 2, 4]);
console.log(secondMax);

// output:
// 4
