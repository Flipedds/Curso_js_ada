// Métodos de arrays
const arrayUm = [30, 12, 45, 34, 29]

// Fatiamento
arrayUm.slice(0); // Tudo -> ([ 30, 12, 45, 34, 29 ])
arrayUm.slice(0, 2); // dois primeiros elementos -> ([ 30, 12 ])

// Adicionar elemento no final do array (push)
arrayUm.push(20); // -> [ 30, 12, 45, 34, 29, 20]

// Adicionar antes (unshift)
arrayUm.unshift(-78); // -> [-78, 30, 12, 45, 34, 29, 20]

// Remover o último elemento do array e retorná-lo (pop)
arrayUm.pop(); // -> [-78, 30, 12, 45, 34, 29] -> 20

// Remover o primeiro elemento do array
arrayUm.shift(-78); // -> [30, 12, 45, 34, 29]

// Concatenando arrays (juntando arrays)

const arrayDois = [6, 7, 8, 9, 10];

let arrayTres = arrayUm.concat(arrayDois);
/* -> [
    30, 12, 45, 34, 29,
     6,  7,  8,  9, 10
  ];
  */

// Buscando elementos em um array, se existir mais de um item ele retorna o indice do primeiro.
let indiceElemento = arrayUm.indexOf(30); // -> 0
// Se retornar -1 o elemento não existe no array

// Buscando elementos em um array, se existir mais de um item ele retorna o indice do último.
let arrayQuatro = [2, 2, 4, 5];
let lastIndice = arrayQuatro.lastIndexOf(2); // -> 1

// Descobrindo se um elemento existe no array retorna ? true | false
console.log(arrayUm.includes(30)); // -> true

// Invertendo array
console.log(arrayUm);
console.log(arrayUm.reverse());







