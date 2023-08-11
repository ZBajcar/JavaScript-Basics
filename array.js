function first(arr) {
  let val = arr.length - 1;
  console.log(arr[val]);
}

//
first(['Earth', 'Moon', 'Mars']); // 'Earth'

//
let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];

energy.shift();
energy.push('geothermal');
console.log(energy);

//
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let newAlphabet = alphabet.split('');
console.log(newAlphabet);

//
let scores = [96, 47, 113, 89, 100, 102];
let count = 0;

for (let i = 0; i < scores.length; i += 1) {
  if (scores[i] >= 100) {
    count += 1;
  }
}

console.log(count);

//
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i = 0; i < vocabulary.length; i += 1) {
  for (let j = 0; j <vocabulary[i].length; j += 1 ) {
    console.log(vocabulary[i][j]);
  }
}

// Expected output:
// happy
// cheerful
// merry
// etc...

//
let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(place, check) {
  for (let i = 0; i < check.length; i += 1) {
    if (check[i] === place) {
      return true;
    }
  }
  return false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

//
let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let newPasscode = passcode.join('-');
console.log(newPasscode);

// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

//
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
 let checkedItems = groceryList.shift();
 console.log(checkedItems);
}
// Your code.
// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

console.log(groceryList); // []




















































