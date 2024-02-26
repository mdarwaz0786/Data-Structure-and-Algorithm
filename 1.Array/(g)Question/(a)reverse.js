// reverse an array
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length / 2; i++) {
  let temp = array[i];
  array[i] = array[array.length - i - 1];
  array[array.length - i - 1] = temp;
};

console.log(array);

// output:
// [ 5, 4, 3, 2, 1 ]