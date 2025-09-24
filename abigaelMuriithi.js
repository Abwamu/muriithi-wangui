function isEven(num) {
  //Check if number is divisible by 2
  if (num % 2 === 0) {
      return true;
  } else {
      return false;
  }
}

//Test cases
console.log(isEven(4));  //Expected output: true
console.log(isEven(7));  //Expected output: false
console.log(isEven(-2)); //Expected otput: true
