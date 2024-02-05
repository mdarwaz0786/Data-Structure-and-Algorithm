// merge two array
function mergeTwoArray(array1, array2, newArray) {
  for (i = 0; i < array1.length; i++) {
    newArray[i] = array1[i];
  };
  for (i = 0; i < array2.length; i++) {
    newArray[newArray.length] = array2[i];
  };
  return newArray;
};

let mergedArray = mergeTwoArray([1, 2, 3, 4, 5], [6, 7, 8, 9], []);
console.log(mergedArray);