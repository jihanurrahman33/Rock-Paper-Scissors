let You = 0;
let Comp = 0;
let choices = document.querySelectorAll('.choice');
let scoreYou = document.querySelector('#Score-you');
let scoreComp = document.querySelector('#Score-comp');

let res = document.querySelectorAll('.result');


const CompChoice = () => {
    let choice2 = Math.floor(Math.random() * 3);
    if (choice2 == 0) {
        return 'rock';
    } else if (choice2 == 1) {
        return 'paper';
    } else {
        return 'sessiors'; 
    }
};

const playGame = (userChoice) => {
    let computerVal = CompChoice();
    console.log('computer:', computerVal);
    console.log('user:', userChoice);

    let userWin = false;  

    if (userChoice === computerVal) {
        console.log("It's a tie!");
        
    } else if (
        (userChoice === 'rock' && computerVal === 'sessiors') || // Rock beats Scissors
        (userChoice === 'sessiors' && computerVal === 'paper') || // Scissors beat Paper
        (userChoice === 'paper' && computerVal === 'rock')        // Paper beats Rock
    ) {
        You++;
        scoreYou.textContent = You;
        userWin = true;
        console.log("You win this round!");
        
    } else {
        Comp++;
        scoreComp.textContent = Comp;
        console.log("Computer wins this round!");
    }
    showWinner(userWin);
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});

const showWinner = (userWin) => {
    console.log("result",res[0].textContent);
    console.log('showwinner called');
    if (userWin) {
        console.log('you win');
        
        res[0].innerHTML = '<h1>You Win!</h1>';
       

    } else{
        res[0].innerHTML = '<h1>You Lose.</h1>';
        console.log('you lose');
        
    }
   
};