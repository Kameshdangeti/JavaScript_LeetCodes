
//you are given a positive integer arrivalTime denoting the arrival time of a 
//train in hours,and another positive integer delayedTime
//denoting the amount of delay in hours in hours.

//Rerun the time when the train will arrive at the station.

//Note that the time in this problem is in 24-hours format.

/* 
  ex:-
  Input: arrivalTime = 15, delayedTime = 5 
  Output: 20 
  Explanation: Arrival time of the train was 15:00 hours.
  It is delayed by 5 hours. 
  Now it will reach at 15+5 = 20 (20:00 hours).
*/

function findArrivalTime(arrivalTime, delayedTime) {
    const totalTime = (arrivalTime + delayedTime);
    if (totalTime >= 24) {
        return totalTime - 24;
    }
    else {
        return totalTime;
    }
}
const arrivalTime = 20;
const delayedTime = 3;
const actualArrivalTime = findArrivalTime(arrivalTime, delayedTime);
console.log(actualArrivalTime);
