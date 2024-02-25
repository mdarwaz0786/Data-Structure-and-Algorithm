// search an element using binary search algorithm
function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (array[mid] === element) {
      return mid;
    } else if (element > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    };
    mid = Math.floor((start + end) / 2);
  };
  return "element not found";
};

let index = binarySearch([1, 2, 3, 4, 5], 7);
console.log(index);

// output:
// element not found