/*
//Examine the example function invocation below. Write the function sum, such 
//that it accepts two arguments and returns the sum of its arguments. You may 
//assume that the function arguments will always be numbers.

function sum(num1,num2) {
  console.log(num1 + num2);
}

sum(22, 10); // 32

//Write a function that logs Brendan Eich's quote 'Always bet on JavaScript.' 
//to the console. What is the return value of the function?

 function brendanEichQuote() {
   console.log('Always bet on javascript.');
}

brendanEichQuote();
// logs:
// Always bet on JavaScript.

//Let's generalize the function from the previous exercise a bit. Implement a 
//function cite that takes two string arguments: the author of the quote and what
//they said. It then logs the quote to the console, as in the following example.

function cite(author,quote) {
  console.log(`${author} said: "${quote}"`);
}

cite('Brendan Eich', 'Always bet on JavaScript.');
// logs:
// Brendan Eich said: "Always bet on JavaScript."

//Write a function that accepts a single argument, a number, and returns the 
//result of multiplying its argument by an exponent of 2 
//(also known as squaring the number)


function squaredNumber(num) {
  return num ** 2;
}

console.log(squaredNumber(3)); // 9

//Write a function that compares the length of two strings. It should return -1 
//if the first string is shorter, 1 if the second string is shorter, and 0 if 
//they're of equal length, as in the following example:

function compareByLength(string1,string2) {
  if (string1.length < string2.length) {
    console.log( -1);
  } else if (string1.length > string2.length) {
    console.log(1);
  } else if (string1.length === string2.length) {
    console.log(0);
  }
}

compareByLength('patience', 'perseverance'); // -1
compareByLength('strength', 'dignity');      //  1
compareByLength('humor', 'grace');           //  0

//Use JavaScript's string methods on the string 'Captain Ruby' to produce the 
//string 'Captain JavaScript'.

console.log('Captain Ruby'.replace('Ruby', 'JavaScript'));

//Write a function that takes an ISO 639-1 language code and returns a greeting
//in that language. You can take the examples below or add whatever languages 
//you like.

function greet(iso) {
  if (iso === 'en') {
    console.log('Hi!');
  } else if (iso === 'fr') {
    console.log('Salut');
  }
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'

//Write a function that extracts the language code from a locale. 
//A locale is a combination of a language code, a region, and usually also a 
//character set, e.g en_US.UTF-8.

function extractLanguage(locale) {
  console.log(locale.split('_')[0]);
}

extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'

//Similar to the previous exercise, now write a function that extracts the 
//region code from a locale. For example:


function extractRegion(locale) {
  console.log(locale[3] + locale[4]);  
}

extractRegion('en_US.UTF-8');  // 'US'
extractRegion('en_GB.UTF-8');  // 'GB'
extractRegion('ko_KR.UTF-16'); // 'KR'

//Building on your solutions from the previous exercises, write a function 
//localGreet that takes a locale as input, 
//and returns a greeting. The locale allows us to greet people from different 
//countries differently also when they share the language, for example:

function greet(locale) {
  if (locale === 'en') {
    return 'Hi!';
  } else if (locale === 'fr') {
    return 'Salut!';
  }
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale[3] + locale[4];  
}

function localGreet(locale) {
  let lang = extractLanguage(locale);
  let place = extractRegion(locale);
  
  switch (place) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return greet(lang);
  }
}

console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'

*/



















































