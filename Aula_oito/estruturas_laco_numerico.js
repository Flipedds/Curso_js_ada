// laço numérico
/* for(let i=0; i<3; i++){
    console.log(1);
} imprime o (1) três vezes
*/

const input = require('readline-sync');
// importação do modulo readline para entrada de dados pelo usuário.

let notas = 0;

for (let count=0; count<=2; count++){
    let nota = Number(input.question("Digite a nota " + (count + 1) + ": "));
    notas += nota;
}

const media = notas / 3;

// Inteira
console.log("A média do aluno é: "+ parseInt(media));

// Decimal
console.log("A média do aluno é: "+ media);

