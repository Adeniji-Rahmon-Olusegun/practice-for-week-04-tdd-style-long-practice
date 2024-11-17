function returnsThree() {
  return 3;
}

function reciprocal(n) {
  
  if (typeof n !== 'number') {
    throw new TypeError('Function expect a number between 1 and 1000000');
  } else if (n < 1 || n > 1000000) {
    throw new TypeError('Only accepts number between 1 and 1000000');
  }

  return (1 / n);
}

//console.log(typeof(-42));

export {returnsThree, reciprocal};