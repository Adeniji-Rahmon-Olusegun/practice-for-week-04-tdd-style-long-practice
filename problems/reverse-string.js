export function reverseString(string) {
  // Your code here
  if (typeof string !== "string") throw new TypeError('function expects a string');

  let reversedWord = "";

  for (let idx = string.length - 1; idx >= 0; idx--) {
    let char = string[idx];

    reversedWord += char;
  }

  return reversedWord;

};

// let str = ["Aty"];

// console.log(reverseString(str));  