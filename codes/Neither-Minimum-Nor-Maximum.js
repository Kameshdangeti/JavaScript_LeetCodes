
//Given an integer array nums containing distinct positive integers,find
//and return any number from the array that is neither the minimum
//nor the maximum value in the array,or -1 if there is no such number.

//Return the selected integer.

/*
Ex:-
Input: nums = [2,1,3]
Output: 2 
Explaination: Since 2 is neither the maximum nor
the maximm vale in nums,it is the only valid
answer.
*/

var findNonMinOrMax = function(nums) {
    if(nums.length<3)
    {
        return -1;
    }
    else
    {
        if(nums.sort((a,b)=>a-b))  //The sort() method of Array instances sorts the 
        {                          //elements of an array in place and returns the reference to the same array.
           return nums[1];
        }
    }
};
const nums =[10,4,22];
const num = findNonMinOrMax(nums);
console.log(num);
