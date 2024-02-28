
//you are given two 0-indexed integer arrays player1 and player2,
//represents the number of pins that player 1 and player 2 hit in a
//bowling game,respectively.

//The bowling game consists of n turns,and the number of pins in each
//turn in exactly 10.

//Assume a player hit xi pins in the ith turn.The value of the ith turn
//for the player is:

//2xi if the player hit 10 pins in any of the previous two turns.
//Otherwise,It is xi.

//The Score of the player is the sum of the values of their n turns.

//Return 
//1 if the score of player 1 is more than the score of player 2,
//2 if the score of player 2 is more than the score of player 1,
//0 in case of a draw.

/* 
ex:-
Input: player1 = [4,10,7,9], player2 = [6,5,2,3]
Output: 1
Explanation: The score of player1 is 4 + 10 + 2*7 + 2*9 = 46.
The score of player2 is 6 + 5 + 2 + 3 = 16.
Score of player1 is more than the score of player2, so, player1 is the winner,
and the answer is 1.
*/

var isWinner = function (player1, player2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < player1.length; i++) {
        if (player1[i - 1] == 10 || player1[i - 2] == 10) {
            sum1 += player1[i] * 2;
        }
        else {
            sum1 += player1[i];
        }
    }
    for (let i = 0; i < player2.length; i++) {
        if (player2[i - 1] == 10 || player2[i - 2] == 10) {
            sum2 += player2[i] * 2;
        }
        else {
            sum2 += player2[i];
        }
    }
    if (sum1 > sum2) {
        return 1;
    }
    else if (sum1 < sum2) {
        return 2;
    }
    else if (sum1 === sum2) {
        return 0;
    }
};
const player1 = [4, 10, 7, 9];
const player2 = [6, 5, 2, 3];
const winner = isWinner(player1, player2)
console.log(winner);