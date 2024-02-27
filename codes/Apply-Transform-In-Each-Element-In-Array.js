
//Given an integer array arr and a mappping function fn,return a new
//array with a transformation applied to each element.

//The returned array should be created such that returnedArray[i] =
//fn(arr[i],i)

//Please solve it without the buit-in Array.map method.

/*
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
*/
var map = function(arr, fn) {
    const arr1=[];
    for(let i=0;i<arr.length;i++)
    {
        arr1[i] =fn(arr[i],i);
    }
    return arr1;
};
const arr=[2,3,4];
const fn = function(n)
{
     return n+1;
}
const arr1 =map(arr,fn);
console.log(arr1);