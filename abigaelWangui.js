function reverseString(str) {
  // Split the string into an array of characters
  let charArray = str.split('');

  //Reverse the array
  let reversedArray =
charArray.reverse();

  //Join the characters back into a string
  let reversedStr =
reversedArray.join('');

  //Return the reversed string
  return reversedStr;
}

// Tests
console.log(reverseString("hello"));//Expected output:"olleh"
console.log(reverseString("12345"));//Expected output:"54321"
console.log(reverseString(""));//Expected output:""
