
//Write code that enhances all arrays such that you can call
//the array.last() method on array and it will return the last
//element.If there are no elements in the array,it should return -1.
//you may assume the array is the output of json.parse.


/*
Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
*/ 


Array.prototype.last = function() {
    if (this.length>0)
    {
          return this [this.length-1]
    }
    else return -1;
};
const arr=[0,1,2];
console.log(arr.last());
