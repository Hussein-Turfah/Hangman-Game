const input = document.getElementById('input')
const man = document.getElementById('man')
const new_game_button = document.getElementById('new-game')
const answer = document.getElementById('answer')
const output = document.getElementById('test1');

let options = {
  words : ['Apple','Banana','Mango',"Lion",'Tiger','Elephant',]}
const word = options.words[Math.floor(Math.random() * options.words.length)].toLowerCase();

document.getElementById('test').innerHTML = word.split()
const splitWord = () => {
  let letter = word.split()
  console.log(letter)
}
splitWord(options.words)

function replaceLetter(){ //to replace the chosen word with underscores(as lines)
  let display_string = '';
  let current_index = 0;
  for (let i = 0; i < word.length; i++) {
    display_string += '_,';
  }
  console.log(display_string)
}
replaceLetter(word)

