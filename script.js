const input = document.getElementById('input')
const man = document.getElementById('man')
const new_game_button = document.getElementById('new-game')
const answer = document.getElementById('answer')

let options = {
  words : ['Apple','Banana','Mango',"Lion",'Tiger','Elephant',]}
console.log(options.words)

const word = options.words[Math.floor(Math.random() * options.words.length)].toLowerCase();

console.log(word)
document.getElementById('test').innerHTML = word
const splitWord = () => {
  let letter = word.split('')
  console.log(letter)
}
arrWord(options.words)


// let incorrect_guesses = 0
