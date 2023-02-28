const input = document.getElementById('input')
const man = document.getElementById('man')
const new_game_button = document.getElementById('new-game')
const answer = document.getElementById('answer')

let options = {
  words : ['Apple','Banana','Mango',"Lion",'Tiger','Elephant',]}
console.log(options.fruits[0])
console.log(options.animals[1])

let word = options.words[Math.floor(Math.random() * options.words.length)].toLowerCase();
let count = 0
let incorrect_guesses = 0
let chosen_word = ''

