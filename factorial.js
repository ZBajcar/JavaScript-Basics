/*function factorial(n) {
  let product = n;
  for (let counter = 1; counter < n; counter += 1) {
  product = product * counter;
  }
  return product;
}

console.log(factorial(4));
*/


function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));