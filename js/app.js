let userScore = 0;
let computerScore = 0;
const userScore_span = $('#user-score');
const computerScore_span = $('#computer-score');
const result_div = $('.result');
const rock_div = $('#pierre');
const paper_div = $('#papier');
const scissors_div = $('#ciseaux');

function computerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}
computerChoice();

function win(){
    userScore++;
    userScore_span.html(userScore);
    result_div.html('Victoire !');
}

function lose(){
    computerScore++;
    computerScore_span.html(computerScore);
    result_div.html('Défaite !');
}

function draw(){
    result_div.html('Egalité !');
}

function game(userChoice) {
    const computer = computerChoice();
    const user = userChoice;

    switch (user + computer) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win();
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw();
            break;
    }
}

function main(){
    rock_div.click(function (){
        game("rock")
    })

    paper_div.click(function (){
        game("paper")
    })

    scissors_div.click(function (){
        game("scissors")
    })
}

main();
