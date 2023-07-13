// Funcões.
// Definição da função.
// se não passar o parâmetro na chamada, se torna undefined.

function saudacao(msg) {
    return msg;
};

// Arrow functions.
let saudar = () => {
    return "Olá, tudo bem?";
};

let saudarPessoa = (nome, curso='ads') =>{ // <- argumento default: se não for passado argumento.
    return `Olá, ${nome}, Como vai o curso: ${curso}?`;
};

let soma = (valorUm, valorDois) =>{
    if (valorUm === 0 || valorDois == 0){
        return "Um dos valores é (0)"
    }
    return valorUm + valorDois;
};

// Chamada da funções.
console.log(saudacao("Olá, como vai?"));
console.log(saudar());
console.log(saudarPessoa("Filipe"));
console.log(soma(10, 10));