function myMap(inputArray, callback) {
  if (!Array.isArray(inputArray)) throw new TypeError("bad input. function expects an array");
  let newArr = [];

  for (let idx = 0; idx < inputArray.length; idx++) {
    let item = inputArray[idx];

    newArr.push(callback(item));
  }

  return newArr;
}

// let func = ele => ele * 2;

// let arr = new Array(3, 5, 1, 3)

// console.log(myMap(arr, func));

export { myMap };