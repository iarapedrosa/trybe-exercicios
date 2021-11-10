// Parte 1 - Objetos e For/In
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("Bem Vinda, "+info.personagem)

info.recorrente = "Sim"

console.log(info)

for(let i in info){
    console.log(info[i])
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for(let a in info){
    console.log(info[a]+' '+info2[a])
}

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

console.log("O livro favorito de "+leitor.nome+' '+leitor.sobrenome+' se chama '+leitor.livrosFavoritos[0].titulo)
leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
);

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

//Função (palíndromo)

function palindromo(palavra){
    if(palavra == palavra.split("").reverse().join("")){
        console.log('true')
    } else{
        console.log('false')
    }
}

palindromo('arara')
palindromo('iara')