// coerção (conversão) de números.

// Explícita

// número para texto.
console.log(String(10));

// string para número.
console.log(Number('12345'));

// string(float) para número.
// Melhor usar o Number ao invés de ParseFloat.
console.log(Number('123.2'));

// Transforma em inteiro.
console.log(parseInt(124.1));

/* 
Transforma em Booleano
    0 -> false
    > 0 -> true
    null -> false
    undefined -> false
*/

console.log(Boolean(undefined));

console.clear()

// Implícita.

// Concatenação.
console.log(10 + '1'); // 101

// ele entende que o 10 é um número.
console.log('10'- 1); // 9

console.log(10 - 'x'); // NaN -> não é um número.


// ????
let n = 1 + '1';
n = n - 1;

console.log(n); // 10.


