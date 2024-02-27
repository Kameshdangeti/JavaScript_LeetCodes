
//Write a generator function that returns a generator object which yields
//the fibonacci sequence.

//The fibonacci sequence is defined by the relation xn = xn-1 + xn2.

//The first few numbers of the series are 0,1,1,2,3,5,8,13.

/**
Input: callCount = 5
Output: [0,1,1,2,3]
Explanation:
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value; // 1
gen.next().value; // 2
gen.next().value; // 3
 */
var fibGenerator = function* () {
    var n1 = 0;
    var n2 = 1;
    while (true) {
        yield n1;
        var n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
};

const gen = fibGenerator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);