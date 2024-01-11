// 1. Write a function that:
//   - Console.logs 'Hello World'
function greeting() {
  console.log("Hello World");
}

// 2. Write a function with 1 parameter that:
//  - Console.logs whatever you want it to say.
//  - This would be a good time to use string interpolation!
function printSomething(message) {
  console.log(`I just said "${message}"`);
}

// 3. Write a function with 1 parameter that:
//  - Prints a random number between 1 and whatever number is for the provided argument. 
//  - You might need to search how to generate a random number.
//  - You might need to search how to round a number up.
function randSpan(span) {
  console.log(Math.floor(Math.random() * span) + 1);
}

// 4. Write a function with 3 parameters that:
//  - Takes the product of the first two parameters and raises them to the power of the third parameter.
//  - Returns the solution.
//  - Example: Passing this function 1, 2, 3 should give you back the answer to (1 * 2)^3, which is 8. 
//  - You may need to search how to raise the power of a number!
function numberChanger(a, b, c) {
  return Math.pow(a * b, c);
}

// 5. Write a function with 1 parameter that:
//  - Converts Celsius to Fahrenheit.
//  - The formula to convert Celsius to Fahrenhiet: F = (C * 1.8) + 32
function celsiusToNormal(degrees) {
  return degrees * 1.8 + 32
}

// 6. Write a function with 1 parameter that:
//  - Takes a word and consoles the letters in alphabetical order.
//  - You'll need to break the word apart, sort the letters, and bring them back together for this!
function wordSplit(word) {
  let wordList = word.split("");
  wordList.sort();
  let out = "";
  for (let i = 0; i < wordList.length; i++) {
    out += wordList[i];
  }
  console.log(out);
}

// BONUS FUNCTIONS!
// 7. Write a function that:
//  - Reverses a number.
function numReverse(num) {
  let numList = num.toString().split("");
  let out = "";
  for (let i = numList.length - 1; i >= 0; i--) {
    out += numList[i];
  }
  out = Number(out);
  console.log(out);
  return out;
}

// 8. Write a function that:
//  - If the number is even, prints “This number is EVEN!”
//  - If the number is odd, prints “This number is ODD!”
function parityCheck(num) {
  if (num % 2 == 0) {
    console.log("This number is EVEN!");
  }
  else {
    console.log("This number is ODD!");
  }
}

// 9. Write a function that:
//  - Prints every number between 1 and 100.
//  - This requires a loop - you may need to look this up!
function oneToHundred() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// 10. Write a function that:
//  -  Prints every EVEN number between 1 and 100.
//  - This requires a loop - you may need to look this up!
function oneToHundredEven() {
  for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
}

greeting();
printSomething("Hey guys!");
randSpan(25);
console.log(numberChanger(2, 3, 4));
console.log(celsiusToNormal(100));
wordSplit("Go hang a salami, I'm a lasagna hog");
console.log(typeof numReverse(4390857084956349));
parityCheck(5001);
parityCheck(8);
oneToHundred();
oneToHundredEven();