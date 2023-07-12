/*
Operadores booleanos
    Igualdade: == (ou ===);
    Diferença:!= (ou !==);
    Menor que: <;
    Maior que: >;
    Menor ou igual a : <=;
    Maior ou igual a : >=;
*/

const numero = 20;

console.log(numero == 20); // true

// == (comparar apenas o conteúdo) ou === (também compara o tipo)
// Sempre utilizar ===, para evitar bugs.

console.log(numero == '20'); // true
console.log(numero === '20'); // false

// limpar terminal
console.clear()

// Sempre usar o !== para verificar pois também comparar por tipo.
console.log(numero != '20');
console.log(numero !== '20');

console.clear()

// Conjunções lógicas
/* 
    AND (&&)
    OR (||)
    NOT (!)
*/

let idade = 80;
let posuiCnh = true;

// se a idade for maior ou igual a 18 e menor que 80 e possuir Cnh
let podeDirigir = idade >= 18 && idade < 80 && posuiCnh != false ? "Pode dirigir" :"Não pode dirigir";

console.log(podeDirigir);
