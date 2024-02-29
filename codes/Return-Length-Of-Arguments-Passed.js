
//Write a function argumentsLength that returns the count of
//arguments passed to it.

/*
ex:-
Input: args = [5] 
Output: 1
Explaination:
argumentsLength(5); //1

One value was passed to the function so it should
return 1.
*/

var argumentsLength = function (...arg) {
    return arguments.length;
}
console.log(argumentsLength({}, 8, [], 0));