// Arrays

// Como criar ?

let arr = []; // Cria um array vazio.
arr = [1, 2, 3, 4, 5];
console.log(arr);

// Acessando array
// Buscando por índice -> inicio pelo indice (0)
console.log(arr[0]); // 1

// Tamanho do array
console.log(arr.length);

console.clear();

// Percorrendo arrays

for (let i=0; i<arr.length; i++){ // for <-
    console.log(arr[i]);
};

console.log("\n");


for (let item of arr){ // for of <- cada elemento do array (1, 2, 3, 4, 5);
    console.log(item);
};

console.log("\n");


for (indice in arr){ // for in <- indices do array (0, 1, 2, 3, 4);
    console.log(indice, arr[indice]);
}

console.log("\n");


let soma = 0;

for (let item of arr){
    soma += item; // <- Somar todos os itens do array;
};

console.log(soma);