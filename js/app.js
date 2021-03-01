let userScore = 0;
let computerScore = 0;
const userScore_span = $('#user-score');
const computerScore_span = $('#computer-score');
const result_div = $('.result');
const computer_span = $('.computer-choice');
const pierre_div = $('#pierre');
const papier_div = $('#papier');
const ciseaux_div = $('#ciseaux');

function computerChoice(){
    const choices = ['pierre', 'papier', 'ciseaux'];
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
    computer_span.html(computer);
    switch (user + computer) {
        case "pierreciseaux":
        case "papierpierre":
        case "ciseauxpapier":
            win();
            break;
        case "pierrepapier":
        case "papierciseaux":
        case "ciseauxpierre":
            lose();
            break;
        case "pierrepierre":
        case "papierpapier":
        case "ciseauxciseaux":
            draw();
            break;
    }
}

function main(){
    pierre_div.click(function (){
        game("pierre")
    })

    papier_div.click(function (){
        game("papier")
    })

    ciseaux_div.click(function (){
        game("ciseaux")
    })
}

main();
