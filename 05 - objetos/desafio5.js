class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm

    }

    calcularGastoViagem (distancia, precoCombustivel){
        return (distancia * this.gastoMedioKm) * precoCombustivel;

    }
}

const uno = new Carro('Fiat', 'Vermelho', 1/12);
const palho = new Carro('Fiat', 'Preto', 1/10);

console.log(uno)

console.log(uno.calcularGastoViagem(70, 5.00));

console.log(palho.calcularGastoViagem(70, 5.00));
