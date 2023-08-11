let string = "These aren't the droids you're looking for.";
console.log(string.length);

let string2 = 'confetti floating everywhere';
string2 = string2.toUpperCase();
console.log(string2);

//implement a function repeat that repeats an input string a given number of 
//times, as shown in the example below; without using the pre-defined string 
//method String.prototype.repeat().


function repeat(num,str) {
  let blank = '';
  for (let count = 0; count < num; count +=1) {
    blank = blank + str;
  }
  return blank;
}

console.log(repeat(3, 'ha')); // 'hahaha'

console.log('A pirate I was meant to be!\nTrim the sails and roam the sea!');

let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.includes('x'));

function isBlank(str) {
  console.log(str.trim().length === 0);
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true


//Write code that capitalizes the words in the string 'launch school tech & 
//talk', so that you get the string 'Launch School Tech & Talk'.


let one = 'launch school tech & talk';
let words = one.split(' ');
let capWords = [];

for (let i = 0; i < words.length; i += 1) {
  let word = words[i];
  
  capWords.push(word[0].toUpperCase() + word.slice(1));
}

console.log(capWords.join(' '));






















