let person = {
    name: "Analyn",
    age: 45,
    country: "Philippines",
    logData: function() {
        console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
    }
}

person.logData()

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries.pop()
largeCountries.push("Pakistan")
largeCountries.shift()
largeCountries.unshift("China")

console.log(largeCountries)


let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
} else {
    console.log("yay")
}

let hands = ["rock", "paper", "scissor"]

function getRandomNum() {
    let randomNumber = Math.floor( Math.random()*3 )
    return randomNumber
}

console.log(hands[getRandomNum()])


