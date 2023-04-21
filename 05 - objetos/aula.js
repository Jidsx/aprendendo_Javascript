class Pessoa {
    nome;
    idade;
    altura;
    anoNascimento;

    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade
        this.altura = altura;
        this.anoNascimento = 2022 - this.idade;
    }

    descrever() {
        console.log(`Meu nome ${this.nome}, minha idade: ${this.idade}
        , minha altura ${this.altura} e meu ano de nascimento ${this.anoNascimento}`)
    }
}

const jean = new Pessoa('Jean I Silva', 19, 1.65);
const joao = new Pessoa('João X Silva', 18, 1.85);

console.log(jean);
console.log(joao);


function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }

    else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }

    else {
        console.log(`${p2.nome} e ${p1.nome} tem a mesma idade`)
    }

}

compararPessoas(jean, joao);

/*
const jean = new Pessoa();
jean.nome = 'Jean I Silva';
jean.idade = 19;
jean.altura = 1.65;

const joao = new Pessoa();
joao.nome = 'João X Silva';
joao.idade = 18;
joao.altura = 1.85;

console.log(jean);
console.log(joao);
*/

/*const jean = {
    nome: 'Jean Israel da Silva',
    idade: 19,
    altura: 1.65,
    descrever: function () {
        console.log(`Meu nome ${this.nome}, minha idade: ${this.idade}
        e minha altura ${this.altura}`)
    }

};

delete jean.nome;

jean.descrever();

console.log(jean[`idade`]);
*/