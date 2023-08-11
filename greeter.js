function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}



let fName = getName('What is your first name?\n');
let lName = getName('What is your last name\n');

console.log(`Hello, ${fName} ${lName}`);