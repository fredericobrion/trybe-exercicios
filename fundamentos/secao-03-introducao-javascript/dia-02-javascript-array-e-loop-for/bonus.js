// 1)
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// console.log(numbers.sort(function(a, b) {return a - b}));

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);



// 2)
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }

// console.log(numbers);



// 3)
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let numbersMultiplied = [];

// for(let index = 0; index <= numbers.length - 2; index += 1) {
//     let resultado = numbers[index] * numbers[index+1];
//     numbersMultiplied.push(resultado);
// }

// numbersMultiplied.push(numbers[numbers.length-1]*2);

// console.log(numbersMultiplied);



// 4)
// let n = 8;
// let stringDeAsteriscos = '';

// for (let index = 0; index < n; index += 1) {
//     stringDeAsteriscos += '*';    
// }

// for (let index = 1; index <= n; index += 1) {
//     console.log(stringDeAsteriscos);
// }



// 5)
// let n = 8;
// let stringDeAsteriscos = '';

// for (let index = 0; index < n; index += 1) {
//     stringDeAsteriscos += '*';
//     console.log(stringDeAsteriscos);    
// }



// 6)

// NÃO PODE ADICIONAR UMA LETRA NA STRING COMO SE FOSSE UMA ARRAY?
// let n = 5;
// let stringDeAsteriscos = '';

// for (let index = 0; index < n; index += 1) {
//     stringDeAsteriscos += ' ';
// }
// for (let index = n - 1; index >= 0; index -= 1) {
//     stringDeAsteriscos[index] = '*';
//     console.log(stringDeAsteriscos);
// }


// let n = 5;
// let stringDeAsteriscos = '';
// let inputPosition = n;

// for (let index = n; index > 0; index -= 1) {
//     for (let columnIndex = 0; columnIndex <= n; columnIndex += 1){
//         if (columnIndex < inputPosition) {
//             stringDeAsteriscos += ' ';
//         }
//         else {
//             stringDeAsteriscos += '*';
//         }
//     }
// console.log(stringDeAsteriscos);
// stringDeAsteriscos = '';
// inputPosition -= 1;
// }




// 7)