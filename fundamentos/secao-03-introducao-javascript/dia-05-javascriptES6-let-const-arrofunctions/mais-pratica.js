// 1) Crie uma função que ligue e desligue o motor de um carro

let status = 'Ligado';

const ligaDesligaCarro = (status) => {
    status === 'Ligado' ? status = 'Desligado' : status = 'Ligado';
    console.log(`O motor está ${status}!`);
    return status;
};

ligaDesligaCarro(status);



// 2)  Crie uma função que calcule a área de um círculo

const calculaAreaCirculo = (raio) => `Esta é a área do círculo: ${raio * raio * 3.14}`;

console.log(calculaAreaCirculo(5));



// 3) Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

// const longestWord = (string) => {
//     let maiorPalavra = ' ';
//     let array = string.split(' ');
//     for (let index in array) {
//         if (array[index].length > maiorPalavra.length) {
//             maiorPalavra = array[index];
//         }
//     }
//     return maiorPalavra;
// };

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));


const longestWord = (string) => string.split(' ').sort((wordA, wordB) => wordB.length - wordA.length);

console.log(longestWord("Antonio foi ao banheiro e não sabemos o que aconteceu"));