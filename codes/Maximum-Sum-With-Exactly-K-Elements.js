
//you are given a 0-indexed integer array nums and an integer k. your
//task is to perform the following operation exactly k times inorder to
//maximize your score:

//1.Select an element m from nums.
//2.Remove the selected element m from the array.
//3.Add a new element with a value of m+1 to the array.
//4.Increase your score by m.

//Return the maximum score you can acheive after performing the 
//operation exactly k times.

/* 
 ex:-
    Input: nums = [1,2,3,4,5], k = 3
    Output: 18
    Explanation: We need to choose exactly 3 elements from nums to maximize the sum.
    For the first iteration, we choose 5. Then sum is 5 and nums = [1,2,3,4,6]
    For the second iteration, we choose 6. Then sum is 5 + 6 and nums = [1,2,3,4,7]
    For the third iteration, we choose 7. Then sum is 5 + 6 + 7 = 18 and nums = [1,2,3,4,8]
    So, we will return 18.
    It can be proven, that 18 is the maximum answer that we can achieve.
*/

var maximizeSum = function (nums, k) {
    let max = Math.max(...nums);
    sum = max;
    for (let i = 1; i < k; i++) {
        sum += max + i;
    }
    return sum;
};
const nums = [1, 2, 3, 4, 5];
const k = 3;
const max = maximizeSum(nums, k);
console.log(max);