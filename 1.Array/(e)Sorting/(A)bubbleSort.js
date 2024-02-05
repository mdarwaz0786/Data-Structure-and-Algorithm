// sort array element using bubble sort algorithm
function bubbleSort(array) {
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      };
    };
  };
  return array;
};

const sortedArray = bubbleSort([5, 4, 3, 2, 1]);
console.log(sortedArray);





