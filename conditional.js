function numberRange(number) {
  number = parseInt(number)
  if (number >= 0 && number <= 50) {
    console.log(`${number} is between 0 and 50 inclusive`)
  } else if (number >= 51 && number <= 100) {
    console.log(number + '51-100')
  } else {
    console.log(number + '' + 'more than 100 or less than 0')
  }
}

numberRange(3.65);