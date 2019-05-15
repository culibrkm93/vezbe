// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

var stringArray = "Game Of Thrones";
var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function vowelSearch() {
  var numberofvowels = 0;
  for (i = 0; i < stringArray.length; i++) {
    for (j = 0; j < vowels.length; j++) {
      if (stringArray[i] === vowels[j]) {
        numberofvowels++;
      }
    }
  }
  return numberofvowels;
}
console.log(vowelSearch(stringArray));

// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

var arrayOfLetters = ["a", "b", "c"];
var arrayOfNumbers = [1, 2, 3];
function combiningArrays() {
  var combinedArrays = [];
  for (var i = 0; i < arrayOfLetters.length; i++) {
    combinedArrays[combinedArrays.length] = arrayOfLetters[i];
    combinedArrays[combinedArrays.length] = arrayOfNumbers[i];
  }
  return combinedArrays;
}
console.log(combiningArrays(arrayOfLetters, arrayOfNumbers));

// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

var givenArr = [1, 2, 3, 4, 5, 6];
function rotationOfElements(givenArr, k) {
  var newArr = [];
  var j = 0;
  for (var i = 0; i < givenArr.length; i++) {
    if (givenArr.length > i + k) {
      newArr[i] = givenArr[i + k];
      j++;
    } else {
      newArr[i] = givenArr[i - j];
    }
  }
  return newArr;
}
console.log(rotationOfElements(givenArr, 2));

// Write a function that takes a number and returns array of its digits.

var givenNo = "85622";
function noToString() {
  var noToArray = [];
  for (var i = 0; i < givenNo.length; i++) {
    noToArray[noToArray.length] = parseInt(givenNo[i]); // Parse int string pretvara u broj!!! - Milica
  }
  return noToArray;
}
console.log(noToString(givenNo));

// Write a program that prints a multiplication table for numbers up to 12.

n = 12;
var table = "";
function multiplicationTable(n) {
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      table += i * j + " ";
      if (j === n) {
        table += "\n";
      }
    }
  }
  return table;
}
console.log(multiplicationTable(n));

// 6. Write a function to input temperature in Centigrade and convert to Fahrenheit.

function conversion(c) {
  var f = c * (9 / 5) + 32;
  return f;
}
console.log(conversion(100));

// 7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

var mixedArray = [12, 55, 8, 23, "abc", "", true, undefined];
var newArray = [];

function filterArray() {
  for (var i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "number") {
      newArray[i] = mixedArray[i];
    }
  }
  return newArray;
}
console.log(filterArray(mixedArray));

function maxElementOfArray() {
  var maxElement = newArray[0];
  for (var i = 0; i < newArray.length; i++)
    if (maxElement < newArray[i]) {
      maxElement = newArray[i];
    }
  return maxElement;
}
console.log(maxElementOfArray(newArray));

// 8. Write a function to find the maximum and minimum elements. Function returns an array.

var arrayOfNumbers = [6, 12, 22, 17, 4, 881, -200];
var minAndMax = [];
function minElement() {
  var minArrayElement = arrayOfNumbers[0];
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (minArrayElement > arrayOfNumbers[i]) {
      minArrayElement = arrayOfNumbers[i];
    }
  }
  return minArrayElement;
}
function maxElement() {
  var maxArrayElement = arrayOfNumbers[0];
  for (i = 0; i < arrayOfNumbers.length; i++) {
    if (maxArrayElement < arrayOfNumbers[i]) {
      maxArrayElement = arrayOfNumbers[i];
    }
  }
  return maxArrayElement;
}
console.log([minElement(arrayOfNumbers), maxElement(arrayOfNumbers)]);

// 9. Write a function to find the median element of array.

var givenArray = [3, 9, 65, 34, 7, 21, 0];
var middleElement;
function midElement() {
  for (j = 0; j < givenArray.length; j++) {
    for (i = 0; i < givenArray.length; i++) {
      if (givenArray[i] > givenArray[i + 1]) {
        var tmp = givenArray[i];
        givenArray[i] = givenArray[i + 1];
        givenArray[i + 1] = tmp;
      }
    }
  }
  return givenArray;
}
function median() {
  var midEl = parseInt(givenArray.length / 2);
  var sorted = midElement();
  return sorted[midEl];
}
console.log(median(givenArray));

// 10. Write a function to find the element that occurs most frequently.

var randomArray=[1,2,5,6,5,4,3,5,5];
var ocurrence=1;
function ocurringElement(){
    for (var i=0;i<randomArray.length;i++){
        if (randomArray[i]==randomArray[i+1]){
            ocurrence++;
        }
    }
}

