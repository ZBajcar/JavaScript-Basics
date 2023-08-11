let student = {
  name: 'Carmen',
  age: 14,
  grade: 10,
  courses: ['biology', 'algebra', 'composition', 'ceramics'],
  gpa: 3.75,
};

//console.log(student.courses);

//
let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
};

//console.log(jane.location.country);

//
let fido = {
  name: 'Fido',
  species: 'Labrador Retriever',
  color: 'brown',
  weight: 16,
};

fido.age = 8;// Add property 'age'.
fido.favoriteFood = 'greenies';// Add property 'favorite food'.

//console.log(fido);

//
let jane2 = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  greet: function(name) { // add code here
    //console.log(`hej, ${name}!`);
  }
};

//jane2.greet('Bobby'); // Hej, Bobby!

//
let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    //console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    //console.log("It's true!");
  }
}

//
let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};


let keys = [];
for (let prop in vehicle) {
  keys.push(prop);
}

//console.log(keys);

//
let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]
let nestedPerson = Object.entries(person);
//console.log(nestedPerson);

//
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let person1 = {};

for (let i = 0; i < nestedArray.length; i += 1) {
  let pair = nestedArray[i];
  
  person1[pair[0]] = pair[1];
}

console.log(person1);








// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

















































































