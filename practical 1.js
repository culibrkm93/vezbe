// 1. Write a program that calculates the maximum of two given numbers. 
// Input: 4 8
// Result: 8

function compare(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
var result = compare(4, 8);
console.log(result);

// 2. Write a program that checks if a given number is odd.
// Input: 56
// Result: No

function checkNumber() {
    if (arguments[0] % 2 === 1) {
        console.log('Yes!');
    } else {
        console.log('No!');
    }
}
checkNumber(56);

// 3. Write a program that checks if a given number is a three digit long number.
// Input: 567
// Result: Yes

function digitCheck(a) {
    if (99 < a && a < 1000) {
        console.log('Yes')
    } else {
        console.log('No')
    }
}
digitCheck(567);

// 4. Write a program that calculates an arithmetic mean of four numbers.
// Input: 7 5 1 3
// Result: 4

function median(a, b, c, d) {
    return (a + b + c + d) / arguments.length;
}
console.log(median(7, 5, 1, 3));


// 5. Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *    *
// *    *
// *    *
// *****

function draw(n) {
    var row = '';
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            if (i !== 0 &&
                j !== 0 &&
                i < n - 1 &&
                j < n - 1) {
                row += '  ';
            }
            else {
                row += '* ';
            }
        }
        row += '\n';
    }
    return row;
}
console.log(draw(5));

// 6. Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function horizontalChart() {
    var row = '';
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i]; j++) {
            row += '*';
        }
        row += '\n'
    }
    return row;
}
console.log(horizontalChart(6, 2, 1, 6, 7, 1, 10));


// 7, Write a program that calculates a number of digits of a given number. 
// Input: 67984
// Output: 5

function determineDigits() {
    var determinate = '';
    determinate += arguments[0];
    console.log(determinate.length);
}
determineDigits(67984);

// 8.Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

var numbersToInspect = [2, 4, 7, 8, 7, 7, 1];
var elementToInspect = 7;
function inspection() {
    var numberOfOccurence = 0;
    for (i = 0; i < numbersToInspect.length; i++) {
        if (numbersToInspect[i] === elementToInspect) {
            numberOfOccurence++;
        }
    }
    return numberOfOccurence;
}
console.log(inspection(numbersToInspect));

// 9. Write a program that calculates the sum of odd elements of a given array. 
// Input: [5, 6, 1, 2, 3, 12]
// Result: 9

var numbersForInspecting = [5, 6, 1, 2, 3, 12];
function addOddNumbers() {
    var sumOfOddNumbers = 0;
    for (i = 0; i < numbersForInspecting.length; i++) {
        if (numbersForInspecting[i] % 2 === 1) {
            sumOfOddNumbers += numbersForInspecting[i];
        }
    }
    return sumOfOddNumbers;
}
console.log(addOddNumbers(numbersForInspecting));

// 10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.
// Input: appearance
// Result: 3

var stringToInspect = 'Appearance';
function appearanceOfCharacter() {
    var characterCount = 0;
    for (i = 0; i < stringToInspect.length; i++) {
        if (stringToInspect[i] === 'a' || stringToInspect[i] === 'A') {
            characterCount++;
        }
    }
    return characterCount;
}
console.log(appearanceOfCharacter(stringToInspect));

// 11. Write a program that concatenates a given string given number of times.
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 

function concOfString() {
    var concatenatedString = '';
    for (i = 0; i < arguments[1]; i++) {
        concatenatedString += arguments[0];
    }
    return concatenatedString;
}
console.log(concOfString('abc ', 10));