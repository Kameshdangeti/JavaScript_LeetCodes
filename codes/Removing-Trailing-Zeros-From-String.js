
//Given a positive integer num represented as a string, 
//return the integer num without trailing zeros as a string.

/*
Ex:-
Input: num = "51230100"
Output: "512301"
Explanation: Integer "51230100" has 2 trailing zeros, 
we remove them and return integer "512301".
*/

var removeTrailingZeros = function (num) {
    return num.replace(/0+$/, "");
    // => 0+ It matches one or more zeroes.
    // => $  It matches the end of string.
    // => "" Replace method matches trailed zeroes and store
    //       with empty string.
};
const num = "5350800"
console.log(removeTrailingZeros(num));