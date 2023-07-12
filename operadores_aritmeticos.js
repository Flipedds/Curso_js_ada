/* 
Operadores
    Adição: +
    Subtração: - 
    Multiplicação: *
    Divisão: /
    Exponenciação: **
    Resto de divisão: %
*/

// Uso dos operadores
let primeiroNumero = 2;
let segundoNumero = 2;

const expo = primeiroNumero ** segundoNumero; 
const soma = primeiroNumero + segundoNumero;
const subtra = primeiroNumero - segundoNumero;
const div = primeiroNumero / segundoNumero;
const resto = primeiroNumero % segundoNumero;

console.log("Exponenciação: ", expo);
console.log("Soma: ", soma);
console.log("Subtração: ", subtra);
console.log("Divisão: ", div);
console.log("Resto da divisão: ", resto);

// Precedencia de operadores
console.log(3+3*7); // multiplicação posteriormente a soma;

// Biblioteca Math
// com funções para cálculos matemáticos avançados

// Pi
const pi = Math.PI;
console.log(pi);

// Raiz quadrada
const raiz = Math.sqrt(16)
console.log(raiz);
