let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return 0
    }
}

let fastestRace = getFastestRaceTime()
// console.log(fastestRace);


// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function call() {
    let totalRaceTime = player1Time + player2Time
    console.log(totalRaceTime);
    return totalRaceTime
}

call()

function getTotalRaceTime(params) {
    return player1Time + player2Time
}

let totalRaceTime = getTotalRaceTime()

console.log(totalRaceTime);
