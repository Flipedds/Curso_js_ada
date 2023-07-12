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
// Sempre utilizar ===, para evitar bugs

console.log(numero == '20'); // true
console.log(numero === '20'); // false

// Sempre usar o !== para verificar o tipo novamente