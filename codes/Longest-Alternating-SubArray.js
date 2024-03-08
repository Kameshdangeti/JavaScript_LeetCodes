
/* 
You are given a 0-indexed integer array nums. 
A subarray s of length m is called alternating if:

m is greater than 1.
s1 = s0 + 1.
The 0-indexed subarray s looks like [s0, s1, s0, s1,...,s(m-1) % 2]. 
In other words, s1 - s0 = 1, s2 - s1 = -1, s3 - s2 = 1, s4 - s3 = -1, 
and so on up to s[m - 1] - s[m - 2] = (-1)m.
Return the maximum length of all alternating subarrays 
present in nums or -1 if no such subarray exists.

A subarray is a contiguous non-empty sequence of elements within an array.

Ex:-

Input: nums = [2,3,4,3,4]
Output: 4
Explanation: The alternating subarrays are [3,4], [3,4,3], and [3,4,3,4]. 
The longest of these is [3,4,3,4], which is of length 4.
*/

var alternatingSubarray = function (a) {
    let n = a.length;
    let max = -1;
    for (let j = 1; j < n; j++) {
        let requiredVal = -1;
        let cc = 1;
        for (let i = j; i < n; i++) {
            let v = a[i - 1] - a[i];
            if (v === requiredVal) {
                requiredVal = -requiredVal;
                cc++;
                max = Math.max(max, cc);
            }
            else {
                requiredVal = -1;
                cc = 1;
            }
        }
    }
    return max;
};
console.log(alternatingSubarray([2,3,4,3,4]));