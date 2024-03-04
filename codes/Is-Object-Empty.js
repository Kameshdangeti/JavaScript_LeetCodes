
//Given an object or an array,if it is empty.

//An empty object contains no key-value pairs.
//An empty array contains no elements.

//You may assume the object or array is the output of JSON.parse.

/*
Ex:-
Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
 */

var isEmpty = function (obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).length === 0;
    }
    return false;
};
console.log(isEmpty("x" ,"y" , 5));