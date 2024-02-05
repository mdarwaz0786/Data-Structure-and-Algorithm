// search an element using linear search algorithm
function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    };
  };
  return "element not found";
};

let indexNumber = linearSearch([3, 2, 5, 1, 4], 3);
console.log(indexNumber);



