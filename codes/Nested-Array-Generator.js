
//Given a multi -dimensional array of integers,return a generator
//object which yields integers in the same order as inorder traversal.

//A multi-dimensional array is a recursive data structure that contains
//both integers and other muti-dimensional arrays.

//inorder traversal iterates over each array from left to right,yielding
//any integers it encounters or applying inorder traversal to any arrays
//it encounters.

/* 
ex:-
Input: arr = [[[6]],[1,3],[]]
Output: [6,1,3]
Explanation:
const generator = inorderTraversal(arr);
generator.next().value; // 6
generator.next().value; // 1
generator.next().value; // 3
*/

var inorderTraversal = function* (arr) {
    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) yield* inorderTraversal(arr[i])

        else yield arr[i]
    }
};

const gen = inorderTraversal([1, [2, 3], [5, 4, 6]]);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

