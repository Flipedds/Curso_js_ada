// Estruturas de repetição
// Laço condicional

// range
const valorUm = 0;
const valorDois = 5;

const random = (valorUm, valorDois) =>{
    min = Math.ceil(valorUm);
    max = Math.floor(valorDois);
    return Math.floor(Math.random() * (max - min) + min);
};

let numeroSorteado = random(valorUm, valorDois);

// biblioteca de input.
// npm install readline-sync.
// Importação da biblioteca de leitura.
const input = require('readline-sync');

// Sempre lê como texto necessita conversão.
let numero = Number(input.question('Qual numero voce escolhe? '));

// Enquanto true
while (numero !== numeroSorteado){
    console.log("Você errou o número. Tente novamente.......");
    numero = Number(input.question('Qual numero voce escolhe? '));
}

console.log('Parabéns você acertou!');


