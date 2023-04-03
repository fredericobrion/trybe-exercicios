let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };


// 1) Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:
// console.log('Bem vinda, ' + info.personagem);



// 2) Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:
info['recorrente'] = 'Sim';
// console.log(info);



// 3) Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:
// for (let keys in info) {
//     console.log(keys);
// };



// 4) Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:
// for (let keys in info) {
//     console.log(info[keys]);
// }



// 5) Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:
// let info2 = {};

// info2.personagem = 'Tio Patinhas';
// info2['origem'] = 'Christmas on Bear Mountain, Dell’s Four Color Comics #178';
// info2.nota = 'O último MacPatinhas';
// info2['recorrente'] = 'Sim';

// for (let keys in info) {
//     if (keys === 'recorrente' && info[keys] === 'Sim' && info2[keys] === 'Sim') {
//         console.log('Ambos recorrentes');
//     } else {
//         console.log(info[keys] + ' e ' + info2[keys]);
//     }        
// }



// ----------------------------------------------------------

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

// 1)
//   console.log('O livro favorito de ' + leitor.nome + ' ' + leitor['sobrenome'] + 'se chama "' + leitor.livrosFavoritos[0].titulo + '"');



// 2) Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto que contenha as seguintes informações:
leitor.livrosFavoritos.push(
    {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco'
    },
);



// 3) Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

// console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');