/*

// 1) Crie um programa que dado um número imprima a sua tabuada.

const num = 2;

for (let i = 1; i <= 10; i++) {
    const resultado = num * [i];
    console.log(num + ' X ' + [i] + ' = ' + resultado);
    
}
*/

/*

// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

for (let i = 0; i < 30; i++) {
    if (i % 2 === 0) {
        console.log('O numero é par: ' + [i])
    }
}
*/

/*
// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Victor', 'Jean', 'Joao', 'Vanderlei', 'Paula'];

for (let i = 0; i < nomes.length; i++) {

    const nome = nomes[i];

    if (nome.startsWith("V")) {
        console.log(nome);
    }
}
*/

/*
//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const lista = [];

for (let i = 10; i <= 50; i++) {

    if (i % 2 === 0) {
        lista.push(i);
    }
}

console.log(lista);
console.log('Números pares entre 10 a 50 são: ' + lista + '\nQuantidade de números pares: ' + lista.length);
*/

/*
// 5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5). Ex de lista = [2, 7, 3, 8, 10, 4]
let media = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < media.length; i++) {

    let medias = media[i];

    if (medias < 5) {
        console.log('Médias que ficaram com recuperação: ' + '\n' + medias);
    }

}
*/

//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota. Ex de lista de notas = [2, 7, 3, 8, 10, 4]

let notas = [2, 7, 3, 8, 10, 4];

let maiorNota = 0;

for (let i = 0; i < notas.length; i++) {

    if (notas[i] > maiorNota){
        maiorNota = notas[i];

    }   
}

console.log("A maior nota é: " + maiorNota);
