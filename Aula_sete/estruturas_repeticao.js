// Estruturas de repetição
// Laço condicional

// range
const valorUm = 0;
const valorDois = 1000;

const random = (valorUm, valorDois) =>{
    min = Math.ceil(valorUm);
    max = Math.floor(valorDois);
    return Math.floor(Math.random() * (max - min) + min);
};

let numeroSorteado = random(valorUm, valorDois);

// biblioteca de input
// npm install readline-sync




