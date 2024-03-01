
//Given a 0-indexed string s,repeatedly perform the following
//operation any number of times:

//Choose an index i in he string,and let c be the character in
//position i.Delete the closest occurance of c to the left of i
//(if any) and the closest occurrence of c to theriht of i(if any).

//your task is to minimize the length of s by pperforming the above 
//operation any number of times.

//Return an integer denoting the length of the minimised string.

/*
Ex:-
Input: s = "aaabc" 
Output: 3
Explanation: In this example, s is "aaabc". We
can start by selecting the character 'a' at index 
1. We then remove the closest 'a' to the left of 
index 1, which is at index 0, and the closest 'a' 
to the right of index 1, which is at index 2. 
After this operation, the string becomes "abc". 
Any further operation we perform on the string 
will leave it unchanged. Therefore, the length of 
the minimized string is 3.
*/

var minimizedStringLength = function (s) {
    const stringlength = new Set([...s]);    //set binds an object property to function to be called when
    return stringlength.size;                //there is an attempt to set that property.
};
console.log(minimizedStringLength("aaabbc"));