
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
    if (Array.isArray(obj)) {      //The Array.isArray() static method determines 
        return obj.length === 0;    //whether the passed value is an Array.
    } else if (typeof obj === 'object' && obj !== null) {  //The typeof operator returns a string indicating 
                                                            //the type of the operand's value.
        return Object.keys(obj).length === 0;
    }
    return false;
};
console.log(isEmpty("x" ,"y" , 5));