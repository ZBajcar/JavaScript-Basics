function greet(greeting = 'Hello') {
  console.log(greeting + ', world!');
}

greet('Salutations'); // logs: Salutations, world!

greet();              // logs: undefined, world!
                      // should log: Hello, world!

//
function greet1(greeting = 'Hello', recipient = 'world') {
  console.log(greeting + ', ' + recipient + '!');
}

greet1();                                // logs: Hello, world!
greet1('Salutations');                   // logs: Salutations, world!
greet1('Good morning', 'Launch School'); // logs: Good morning, Launch School!

//
function greeting2() {
  return 'Good morning';
}

function recipient2() {
  return 'Launch School';
}

function greet2() {
  console.log(greeting2() + ',' + recipient2() + '!');
}

greet2();

//
function bmi(cm,kg) {
  cm = cm/100;
  let ans = kg / cm**2;
  return ans.toFixed(2);
}

console.log(bmi(180, 80)); // "24.69")

//
function catAge(humYear) {
  switch(humYear) {
    case 0: 
      return 0;
    case 1: 
      return 15;
    case 2: 
      return 24;
    default: 
      return 24 + (humYear - 2) * 4;
  }
}

console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32


//
function removeLastChar(string) {
  console.log(string.substring(0,string.length-1));
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

//
const template = 'I VERB NOUN.';

let sentence = (verb, noun) => template
                              .replace('VERB', verb)
                              .replace('NOUN', noun);


console.log(sentence('like', 'birds'));
// logs: I like birds.

//
let initGame = () => ({level: 1, score: 0});
  

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);










































































