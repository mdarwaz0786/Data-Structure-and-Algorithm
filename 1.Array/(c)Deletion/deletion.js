// delete an element
function deleteElement(array, index) {
  for (let i = index; i < array.length - 1; i++) {
    array[i] = array[i + 1];
  };
  array.length = array.length - 1;
  return array;
};

let newArray = deleteElement([1, 2, 3, 4, 5], 3);

console.log(newArray);
