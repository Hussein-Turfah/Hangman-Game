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

//new

function check(word) {
  let displayString = '';
  let currentIndex = 0;
  let life = 6

  //start first with underscores for each letter in the word chosen by system
  for (let i = 0; i < word.length; i++) {
    displayString += '_';
  }
  output.textContent = displayString;

  document.addEventListener('keydown', function(event) {
    // extract the pressed key from the event object
    const key = event.key;
      if(life>0){
        if (word.includes(key)) {
          for (let i = 0; i < word.length; i++) {
            if (word[i] === key) {
            // if the key is correct, update the display string
              displayString = displayString.slice(0, i) + key + displayString.slice(i + 1);}
          }
        }
        else{
          switch(life){
            case 1:
              this.getElementById('left-leg').style.display = 'block';
              document.removeEventListener('keydown', arguments.callee);
              this.getElementById('result').innerHTML = "Game Over!"
              break;
            case 2:
              this.getElementById('right-leg').style.display = 'block';
              break;
            case 3:
              this.getElementById('left-arm').style.display = 'block';
              break;
            case 4:
              this.getElementById('right-arm').style.display = 'block';
              break;
            case 5:
              this.getElementById('body').style.display = 'block';
              break;
            case 6:
                this.getElementById('head').style.display = 'block';
                break;
          }
          life -= 1
          console.log(life)
        }
      }
      // else{
      //   document.removeEventListener('keydown', arguments.callee);
      //   alert('Game Over!')
      //   return
      // }
    

    // update the output element on the screen
    output.textContent = displayString;
    //check for missing letters
    if (!displayString.includes('_')) {
      alert('You Won!');
      // remove the event listener to prevent further input
      document.removeEventListener('keydown', arguments.callee);
    }
  });
}


check(word)