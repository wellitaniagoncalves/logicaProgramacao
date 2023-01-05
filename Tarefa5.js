// função que o usuário escolha a jogada
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'pedra' || userInput === 'papel' || userInput === 'tesoura' || userInput === 'bomba') {
        return userInput;
    } else return console.log('erro');
}

//função que o computador escolhe a jogada
function getComputerChoice() {
    const numbertChoice = Math.floor(Math.random() * 3);
    let option;
    switch (numbertChoice) {
        case 0:
            option = 'pedra';
            break;
        case 1:
            option = 'papel';
            break;
        case 2:
            option = 'tesoura';
            break;
        default:
            option = 'erro';
    }
    return option;
}
console.log(getComputerChoice());

//função que determina o vencedor
function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return "Empatou";
    }
    if (userChoice === 'pedra') {
        if (computerChoice === 'papel') {
            return "Computador Ganhou"
        } else return 'Humano ganhou!'
    }
    if (userChoice === 'papel') {
        if (computerChoice === 'tesoura') {
            return "Computador Ganhou"
        } else return 'Humano ganhou!'
    }
    if (userChoice === 'tesoura') {
        if (computerChoice === 'pedra') {
            return "Computador Ganhou"
        } else return 'Humano ganhou!'
    }
    if (userChoice === 'bomba') {
        return 'Humano Ganhou!'

    }
}
    console.log(determineWinner('tesoura', 'pedra'))
    //jogo

    const playGame = () => {
        let userChoice = getUserChoice('bomba');
        let computerChoice = getComputerChoice()
        let result = determineWinner(userChoice, computerChoice)
        console.log(`Escolha do usuário foi: ${userChoice}`);
        console.log(`Escolha do usuário foi: ${computerChoice}`);
        console.log(`Escolha do usuário foi: ${result}`);


    }
    playGame();




