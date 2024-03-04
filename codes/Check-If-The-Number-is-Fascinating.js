
//You are given an integer n that consists of exactly 3 digits.

//We call the number n fascinating if,after the following modififcation,
//the resulting number contains all the digits from 1 to 9 exactly once
//and does not contain any 0's:

//Concatenate n with the numbers 2*n and 3*n.

//Return true if n is fascinating,ot false otherwise.

//Concatenating two numbers means joining them together.For
//example,the Concatenation of 121 and 371 is 121371.

/*
Ex:-
Input: n = 192
Output: true
Explaination: We concatenate the numbers n =192
and 2 * n = 384 and 3 * n = 576.The resulting
number is 192384576. This number contains all 
digits from 1 to 9 exactly once. 
*/

var isFascinating = function(n) {
    const conc = `${n}${2*n}${3*n}`, obj = {};

   for (let i=0; i<conc.length; i++) {
       if (conc[i] === '0') return false;
       if (obj.hasOwnProperty(conc[i])) obj[conc[i]]++;
       else obj[conc[i]] = 1;
       if (obj[conc[i]] > 1) return false;
   }
   for (const x in obj) {
       if (x === '0' || obj[x] > 1) return false;
   }
   return true;
};
console.log(isFascinating(192));