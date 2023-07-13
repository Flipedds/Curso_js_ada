// Objetos

// Como criar um objeto ?
// chaves complexas necessitam de "" e necessitam ['']

const pessoa = {
    nome: "Filipe",
    idade: 19,
};

// Acessando elemento do objeto
console.log(pessoa.nome);
console.log(pessoa['nome']);

// Adicionar nova chave se não existir adiciona
// Se existir altera
pessoa.altura = 1.72;
console.log(pessoa); // { nome: 'Filipe', idade: 19, altura: 1.72 }

// Remover elemento do objeto.
delete pessoa.altura;
console.log(pessoa); // { nome: 'Filipe', idade: 19 }

// Percorrendo Objetos
for (let key in pessoa) {// Para cada chave em pessoa.
  if (pessoa.hasOwnProperty(key)) {
    const value = pessoa[key];// valor = pessoa['key'].
    console.log(key, value);
  }
};