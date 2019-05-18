// 1. Write a function to check whether the `input` is a string or not.
// "My random string" -> true
// 12 -> false

function checkTypeOfInput() {
    if (typeof (arguments[0] === String)) {
        console.log(arguments[0] + ' is a string');
    } else {
        console.log(arguments[0] + ' is not a string')
    }
}
checkTypeOfInput('COECE OVO RADI');

// 2. Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function checkString() {
    if (typeof arguments[0] === 'string') {
        if (arguments[0].length > 0) {
            console.log('The string has characters');
        } if (arguments[0].length === 0) {
            console.log('The string has no characters');
        }
    } else {
        console.log(arguments[0] + ' is not a string');
    }
}
checkString(12);

//3. Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenateString() {
    var concatenatedString = '';
    for (var i = 0; i < arguments[1]; i++) {
        concatenatedString += arguments[0];
    }
    return concatenatedString;
}
console.log(concatenateString('Ha', 5));

// 4. Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function characterOccurrence() {
    var counter = 0
    for (var i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === arguments[1]) {
            counter++;
        }
    }
    return counter
}
console.log(characterOccurrence('My random string', 'n'));

//5. Write a function to find the position of the first occurrence of a character in a string.
// The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.

function firstOccurrence() {
    var first;
    for (i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === arguments[1]) {
            first = i + 1;
            break;
        }
    }
    return first;
}
console.log(firstOccurrence('Otorinolaringolog', 'o'));

//6.  Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

function lastOccurrence() {
    var first;
    for (i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === arguments[1]) {
            first = i + 1;
        }
    }
    return first;
}
console.log(lastOccurrence('Otorinolaringolog', 'o'));

//7. Write a function to convert string into an array. Space in a string should be represented as “null” in new array.
// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]

function stringToArray() {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < arguments[0].length; i++) {
        if (arguments[0][i] === ' ') {
            newArray[j] = arguments[0][i];
        } else {
            newArray[j] = arguments[0][i];
        }
        j++;
    }
    return newArray;
}
console.log(stringToArray('My random string'));

//8. Write a function that accepts a number as a parameter and checks if the number is prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.



// 9. Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.
//     "My random string", "_" -> "My_random_string"
//     "My random string", "+" -> "My+random+string"
//     "My random string" -> "My-random-string"



//10.  Write a function to get the first n characters and add “...” at the end of newly created string.



//11  Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]



//12  Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.



//13 Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th



// Hint: num % 100 >= 11 && num % 100 <= 13