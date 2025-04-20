let count = 0
let countEl = document.getElementById("increment-el")
let countEntries = document.getElementById("entries-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countEntry = count + " - "
    countEntries.textContent += countEntry
    count = 0
    countEl.textContent = count
}

let myPoints = 3

function add3Points() {
    myPoints+= 3
}

function remove1Point(){
    myPoints-= 1
}

add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()

console.log(myPoints)