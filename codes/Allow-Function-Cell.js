
//Given a function fn,return a new function that is identical to the 
//original function except that it ensures fn is called at most ence.

//The first time the returned function is called,it should return the
//same result as fn.

//Every subsequent time it is called,it should return undefined.

/*
ex:-
Input: fn = (a,b,c) => (a + b + c), 
calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined
*/

var once = function (fn) {
    let usedOnce = false;
    let result;
    return function (...args) {
        if (!usedOnce) {
            result = fn(...args);
            usedOnce = true;
            return result;
        }
        return undefined;
    };
};
let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6)); 