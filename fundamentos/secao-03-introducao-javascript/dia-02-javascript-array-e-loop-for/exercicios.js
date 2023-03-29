let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.1)
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);
// }



// 1.2)
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
// }
// console.log(sum);



// 1.3)
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
// }
// console.log(sum/numbers.length);



// 1.4)
// let sum = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     sum += numbers[i];
// }
// if (sum > 20) {
//     console.log('Valor maior que 20');
// }   
// else {
//     console.log('Valor menor ou igual a 20');
// }



// 1.5)
// let maiorNumero = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {    
//     if (numbers[i] > maiorNumero) {
//         maiorNumero = numbers[i];
//     }
// }
// console.log(maiorNumero);



// 1.6)
// let oddNumbers = 0;
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 !== 0) {
//         oddNumbers += 1;
//     }
// }
// console.log(oddNumbers);



// 1.7)
// let menorNumero = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {    
//     if (numbers[i] < menorNumero) {
//         menorNumero = numbers[i];
//     }
// }
// console.log(menorNumero);



// 1.8)
// let array = [];
// for (let i = 1; i < 26; i += 1) {
//     array.push(i);
// }
// console.log(array);



// 1.9)
// let array = [];
// for (let i = 1; i < 26; i += 1) {
//     array.push(i);
// }
// for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]/2)
// }




// 2.1)
// let num = 10;
// let fatorial = num;
// for (let i = num - 1; i > 0; i -= 1) {
//     fatorial = fatorial * i;
// }
// console.log(fatorial);



// 2.2)
// let word = 'tryber';
// let invertedWord = '';

// for (let i = word.length - 1; i >= 0; i -= 1) {
//     invertedWord += word[i];
// }
// console.log(invertedWord);



// 2.3)
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index];
    }
}

for (let index = 1; index < array.length; index += 1) {
    if (array[index].length < menorPalavra.length) {
        menorPalavra = array[index];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);