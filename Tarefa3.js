//1
let userName = 'Uwelligtânia';

//2
userName ? console.log(`Olá  ${userName}`) : console.log(`Olá!`);

//3
const userQuestion = `Ficarei rica em 2023?`;

const perguntaCompleta = userName ? `${userName} está perguntando` : `Usuário anônimo pergunta: ${userQuestion}`

console.log(perguntaCompleta)

//4
console.log(userQuestion);

//5
let randomNumber = ;
console.log(Math.floor(Math.random() * 8));

//6
let eightBall = '';

//7 //8
// switch (randomNumber) {

// } else if (eightBall === 'É uma certeza!') {

// } else if (eightBall === 'É decididamente assim!') {

// } else if (eightBall === 'Resposta nebulosa, tente de novo.') {

// } else if (eightBall === 'Não consigo prever agora.') {

// } else if (eightBall === 'Não conte com isso.') {

// } else if (eightBall === 'Minhas fontes dizem que não.') {

// } else if (eightBall === 'Perspectiva não tão boa.') {

// } else if (eightBall === 'Os Sinais Apontam Que Sim!') {

// } else
//     console.log('Isso Não Vai Acontecer.');

// console.log(eightBall)

switch (randomNumber) {
    case 0: {
        eightBall = 'It is certain (É uma certeza).';
        break;
    }
    case 1: {
        eightBall = 'É decididamente assim!';
        break;
    }
    
    case 2: {
        eightBall = 'Resposta nebulosa, tente de novo';
        break;
    }
    case 3: {
        eightBall = 'Não consigo prever agora';
        break;
    }
    default: {
        eightBall = 'Sei lá, irmão!'
    }
}
console.log(eightBall);
