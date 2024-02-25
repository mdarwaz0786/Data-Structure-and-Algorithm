// sort array element using selection sort algorithm
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      };
    };
    if (min != i) {
      [array[i], array[min]] = [array[min], array[i]];
    };
  };
  return array;
};

const result = selectionSort([5, 4, 3, 2, 1]);
console.log(result);

// output:
// [ 1, 2, 3, 4, 5 ]