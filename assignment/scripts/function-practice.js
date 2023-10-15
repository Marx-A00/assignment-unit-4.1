console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say: "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`; // trying to use backtick + ${} (template literal) for extra practice.
}

// Remember to call the function to test
console.log(`test should return hello + name!`, helloName(`Roger`));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber,secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log("should return firstNumber + secondNumber(4) = 9",addNumbers(5,5));


// 4. Function to multiply three numbers & return the result
function multiplyThree() {
  let firstNumber = 1;
  let secondNumber = 6;
  let thirdNumber = 4;

  return (firstNumber * secondNumber * thirdNumber);
}
console.log("should return 1*6*4 = 24",multiplyThree());

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  return false;
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

console.log("should return true: ",isPositive(1));
console.log("should return false: ", isPositive(-5));
console.log("should return false: ", isPositive(0));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length == 0){
    return undefined;
  }

  return array.pop();
}

console.log("should return 4",getLast([1,2,3,4]));
console.log("should return undefined: ",getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(let x of array){
    if (x == value){
      return true;
    }
  }
  return false;
}

console.log("should return true: ", find(4,[1,2,3,4]));
console.log("should return false: ", find(0,[1,2,3,4]));
console.log("should return false: ", find(0,[]));



// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for(let i of string){
    if( i == letter){
      return true;
    }
  }
  return false;
}

console.log("should return true: ",isFirstLetter("a","apple"));
console.log("should return false: ",isFirstLetter("b","apple"));




// 9. Function to return the sum of all numbers in an array
function sumAll(array) {  // altered function signature, gained approval from instructor.

  let sum = 0;
  // TODO: loop to add items
  for(let i of array){
    sum += i;
  }
  // TODO: return the sum
  return sum;
}
console.log("sumAll Array test: ",sumAll([1,2,3,4,5]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function allPositive(array) {
  let positiveArray = [];
  for(let x of array){
    if(x > 0){
      positiveArray.push(x);
    }
  }
  return positiveArray;
}
console.log(allPositive([-1,-2,-3,0,1,4,7,10,-11]));


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// https://edabit.com/challenge/5eCqrJ7ByYCweDbHg

/*
Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology.
 The machines now interpret a series of consecutive dance moves in place of a PIN number.

Create a program that converts a customer's PIN number to its dance equivalent.
There is one dance move per digit in the PIN number. A list of dance moves is given in the code. 

  - Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value.
    If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.

  - Valid input will always be a string of four digits. Output will be a string array.

  - If the input is not four valid numbers, return the string, "Invalid input."

------- EXAMPLES-----------

danceConvert("0000") ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

danceConvert("3856") ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

danceConvert("9999") ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

danceConvert("32a1") ➞ "Invalid input."
 */


const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
function danceConvert(pin){
	if(/[^0-9]/i.test(pin) || pin.length !== 4) return "Invalid input.";

	let danceArray = [];
	
  for(let i=0; i < pin.length; i++){
    let pinIndexValue = Number(pin[i]);
    let danceFromPin = i + pinIndexValue;
		if(danceFromPin > 9){
			danceFromPin-=10;
		}
		danceArray.push(MOVES[danceFromPin]);
  }
  return danceArray;
}
console.log(danceConvert("5555"));
console.log(danceConvert("0000")); 
console.log(danceConvert("32a1"));

// Below is all my work from trying to figure out this problem.





// function danceConvert(pin){
//   for(let i = 0; i < pin.length; i++){
//     // maybe first have to handle exception: index + value > MOVES.length
//     let pinIndex = i;
//     let pinIndexValue = pin[i];
//     let danceFromPin = pinIndex + pinIndexValue;

// 			if(danceFromPin > pin.length){
// 				let modDancePin = danceFromPin%pin.length;
// 				danceArray.push(MOVES[modDancePin]);
// 		}
// 		danceArray.push(MOVES[danceFromPin]);
//   }
//   return danceArray;
// }
// // console.log(danceConvert(432));
// // let testnum = "0000";

// // console.log(testnum[0]);
// // console.log(testnum.length);
// let testPushArray = [];
// const MOVES = ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
// //MOVES.length = 10.
// let danceArray = [];
// function testNum(pin){
//   if(Number.isNaN(pin)){
//     return "Invalid input.";
//   }

//   console.log(pin.split(""));
//   for( let i = 0; i< pin.length; i++){
//     let pinIndexValue = parseInt(pin[i]);
//     let danceFromPin = i + pinIndexValue;
//     console.log("START");
//     console.log("danceFromPin: ",danceFromPin);

//     if(danceFromPin > MOVES.length){
//       let modDancePin = (danceFromPin % MOVES.length);
//       console.log("modDancePin: ", modDancePin);
//       testPushArray.push(MOVES[modDancePin]);
//     }
//     else if(danceFromPin == MOVES.length){
//       danceFromPin--;
//     }
//     testPushArray.push(MOVES[danceFromPin]);
//     console.log(testPushArray);
//   }

// }
// console.log(testNum("5555"));
// console.log("MOVES : ",MOVES);
// console.log("************");

// console.log(testPushArray);




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
