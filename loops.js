function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      array[i] = 'I am 1 strange loop.';
    }
    else {
      array[i] = `I am ${i} strange loops.`;
    }
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
  return('done');
}

function maybeTrue(){
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
  array.slice(-1);
  } while (array.length > 0 && maybeTrue())
}
