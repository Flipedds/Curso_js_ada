// Estruturas de condição.

const idade = 19;

// if -> se condição for true.
if(idade >= 18){
    console.log("Maior de idade!");
}
// else -> se for false.
else{
    console.log("Menor de idade!");
}

// Ternário.
// variável = condição if true -> Maior de idade else: Menor de idade.
let condicao = idade >=18 ? 'Maior de idade!':'Menor de idade!';
console.log(condicao);


let nota = 10;

// if -> se condição for true.
if (nota === 10){
    console.log('Aprovado com distinção');
}
// else if -> senão se for true.
else if (nota >= 6 && nota <10){
    console.log("Aprovado!");
}
// else -> se for false.
else{
    console.log("Reprovado");
}


