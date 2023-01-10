//1
function digaOi() {
    return 'Oi, Mundo'
}
//2
function possoVotar(idade) {
    if (idade >= 18) {
        return true
    } else {

        return false
    }
}
console.log(possoVotar(18))
//const possoVotar = idade => idade >= 18 ? true : false;


// 3
function concordoDiscordo(Sim2, Não1) {
    if (Sim2 === Não1) {
        return 'Vocês concordam!'

    } else {
        return 'Vocês discordam!'
    }
}
console.log(concordoDiscordo('Sim1', 'Sim2'))
// const concordoDiscordo = (Sim2, Não1) => { return Sim2 === Não1 ? 'Vocês concordam' : 'Vocês discordam!' }

//4
function faseDaVida(idade) {
    if (idade < 0 || idade > 140) {
        return 'Esta não é uma idade válida'
    }
    if (idade >= 0 && idade <= 3) {
        return 'bebe'
    }
    if (idade >= 4 && idade <= 12) {
        return 'criança'
    }

    if (idade >= 13 && idade <= 19) {
        return 'adolescente'
    }
    if (idade >= 20 && idade <= 64) {
        return 'adulto'
    }
    if (idade >= 65 && idade <= 140) {
        return 'idoso'
    }
}
console.log(faseDaVida(20))

//5
function notafinal(Nota1, Nota2, Nota3) {
    const media = Math.floor((Nota1 + Nota2 + Nota3) / 3)
    if (Nota1 < 0 || Nota1 > 100 || Nota2 < 0 || Nota2 > 100 || Nota3 < 0 || Nota3 > 100)
        return 'Você digitou uma nota invalida'
    if (media >= 0 && media <= 59) {
        return 'F'
    }
    if (media >= 60 && media <= 69) {
        return 'D'
    }
    if (media >= 70 && media <= 79) {
        return 'C'
    }
    if (media >= 80 && media <= 89) {
        return 'B'
    }
    if (media >= 90 && media <= 100) {
        return 'A'
    }

}
console.log(notafinal(10, 20, 30))

6
function seApresente(patente, ultimoNome) {
    return `${patente} ${ultimoNome} se apresentando para o serviço!`
}
console.log(seApresente('patente', 'Uwelligtania'))