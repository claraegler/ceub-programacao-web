let conteudo;

conteudo = document.getElementById("titulos");

conteudo.innerHTML = "<h1>Esse conteudo está vindo do javascript</h1>"

let conteudo2 = document.getElementById("paragrafo-legal");
conteudo2.innerHTML = "<p>Esse parágrafo vem do javascript</p>"

console.log(typeof(conteudo))
console.log(conteudo);





//Imprima os numeros de 1 a 5 na tela
// for(let i = 1; i < 5; i += 5) {
//     console.log(i);
// }

// let i = 1;

// while (i < 6) {
//     console.log(i);
//     i++;
// }

/*
let idade = 17;
let nome = "joao";
let altura = 1.80;

if (idade >= 18 || nome != "pedro") {
    console.log("ola!");
}

let meuArray = [1, 3, 4, 6, 0, -3]

console.log(meuArray[0]);
console.log(meuArray);

console.log(meuArray.length);

let pessoa = {
    nome: "joão",
    idade: 18,
    altura: 1.78
}

console.log( "a idade da pessoa " + pessoa.nome + " é " + pessoa.idade)
*/