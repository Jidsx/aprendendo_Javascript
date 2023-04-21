/*
const funcoes = require(`./funcoes_auxiliares`);

console.log(funcoes.gets());
*/

const { gets, print } = require(`./funcoes_auxiliares`);

const numerosSorteados = [];

let maiorValor = 0;

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);

    if (numerosSorteado > maiorValor) {
        maiorValor = numerosSorteado
    }
}

print(numerosSorteados);

console.log('O maior valor da lista é: ' + maiorValor);