// number guessing game in js
const min=1;
const max=100;
const randomNumber=Math.floor(Math.random()*(max-min+1) + min);

let attempts=0;
let maximumattempts=10;

let isGameOver=false;

while(!isGameOver) {
    guess=Number(window.prompt(`Guess a number between ${min} and ${max}. You have ${maximumattempts - attempts} attempts left.`));
    if (guess <min || guess >max){
        window.alert(`Please enter a number between ${min} and ${max}.`);
    }
    else if(isNaN(guess)) {
        window.alert("Please enter a valid number.");
    }
    else{
        attempts++;
        if(guess === randomNumber) {
            window.alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
            isGameOver = true;
        } else if(attempts >= maximumattempts) {
            window.alert(`Game over! You've used all your attempts. The number was ${randomNumber}.`);
            isGameOver = true;
        } else if(guess < randomNumber) {
            window.alert("Too low! Try again.");
        } else {
            window.alert("Too high! Try again.");
        }
    }

}
