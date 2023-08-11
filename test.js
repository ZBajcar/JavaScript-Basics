let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let key = (Object.keys(obj));

let upperKey = key.map((ke) => ke.toUpperCase());

console.log(upperKey);