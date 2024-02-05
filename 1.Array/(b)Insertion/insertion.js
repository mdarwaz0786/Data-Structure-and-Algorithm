// insert an element
function insertElement(array, index, element) {
  for (let i = array.length; i > index; i--) {
    array[i] = array[i - 1];
  };
  array[index] = element;
  return array;
};

let newArray = insertElement([1, 2, 3, 4, 5], 2, 6);
console.log(newArray);













