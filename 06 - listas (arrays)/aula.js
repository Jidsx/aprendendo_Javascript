/*
const alunos = ['Jean', 'Victor', 'Maria'];

alunos.push('Renan');
alunos.push(10);

console.log(alunos);

console.log(alunos[0]);
*/

const notas = [];

notas.push(10);
notas.push(7);
notas.push(9);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota;

}

const media = soma / notas.length;

console.log(media.toFixed(2));
