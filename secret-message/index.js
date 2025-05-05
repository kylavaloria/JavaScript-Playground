/*
    addLoveLetter() function
        1. Get the value of the newLetter
        2. Add the newLetter to an array of strings -> letterBox
        3. Display the letter using letterBox id
    
    searchLetters()
        1. Get the value of the searchWord
        2. Search in the letterBox array of strings
    
    replaceInLetters()
        1. Get the value of the replaceWord
        2. Search the word in letterBox array of strings
        3. Replace the matches word
*/
let lettersArray = []

function addLoveLetter() {
    const newLetter = document.getElementById("newLetter");
    const letter = document.createElement("p");
    letter.innerText = newLetter.value;
    document.body.appendChild(letter);

    lettersArray.push(newLetter.value);
    newLetter.value = "";
}

function searchLetters() {
    const searchWord = document.getElementById("searchWord").value;
    const results = lettersArray.filter(letter =>
        letter.toLowerCase().includes(searchWord.toLowerCase())
    );

    console.log("Search results:", results);
}

function replaceInLetters(){
    const searchWord = document.getElementById("searchWord").value;
    const replaceWord = document.getElementById("replaceWord").value;
    lettersArray = lettersArray.map(letter =>
        letter.replaceAll(searchWord, replaceWord)
    );

    const letterBox = document.getElementById("letterBox");
    letterBox.innerHTML = "";

    lettersArray.forEach(letterText => {
        const letter = document.createElement("p");
        letter.innerText = letterText;
        letterBox.appendChild(letter);
    });
}

console.log(lettersArray);
