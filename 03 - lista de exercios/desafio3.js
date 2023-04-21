nota1 = 8;
nota2 = 7;
nota3 = 9;

media = (nota1 + nota2 + nota3) / 3;

console.log('Sua média é: ' + media);

if (media > 7) {
    console.log('Parabéns você passou de semestre!')
}

else if (media >= 5 && media < 7) {
    console.log('Você ficou de Recuperação')
}

else if (media < 5) {
    console.log('Você foi Reprovado')
}

const peso = 55;
const altura = 1.65;
const imc = peso / Math.pow(altura, 2);
console.log('Seu IMC é: ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso');
}

else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
}

else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso');
}

else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
}

else if (imc > 40) {
    console.log('Obsesidade Grave');
}

const precoEti = 100;
const formaPag = 4;
const debito = precoEti - (precoEti * 0.1);
const dinheiro = precoEti - (precoEti * 0.15);
const maisDuasvezes = precoEti + (precoEti * 0.1);

if (formaPag === 1) {
    console.log('Débito, com 10% de desconto: ' + debito);
}

else if (formaPag === 2) {
    console.log('no Dinheiro ou PIX, recebe 15% de desconto: ' + dinheiro);
}

else if (formaPag === 3) {
    console.log('Em duas vezes, preço normal de etiqueta sem juros' + precoEti);
}

else {
    console.log('Acima de duas vezes, preço normal de etiqueta com de 10% de juros: ' + maisDuasvezes);
}