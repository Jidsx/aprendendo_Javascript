function teste() {
    console.log('Teste');
}

teste();

function sayMyName(nome) {
    console.log('Seu nome é: ' + nome)
}

sayMyName('Jean');

function quadrado (num){
    quadrado2 = num * num;
    console.log('O valor ao quadrado é : ' + quadrado2);
}

quadrado(10);

function incrementarJuros(valor, percentualJuros){
    valorJuros = (percentualJuros / 100) * valor;
    total = valor + valorJuros;
    console.log('O valor com juros: ' + total)
}

incrementarJuros(100,20);