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
// let base = 5;
// let middle = (base + 1) / 2;
// let left = middle;
// let right = middle;
// let symbol = '*';
// let inputLine = '';

// for (let lineIndex = 0; lineIndex <= middle; lineIndex += 1) {
//     for (let columnIndex = 0; columnIndex <= base; columnIndex += 1) {
//         if (columnIndex > left && columnIndex < right) {
//           inputLine += symbol;
//         } else {
//           inputLine += ' ';
//         }
//     }
//     console.log(inputLine);
//     inputLine = '';
//     left -= 1;
//     right += 1;
// }



// 8)
// let base = 7;
// let middle = (base + 1) / 2;
// let left = middle;
// let right = middle;
// let symbol = '*';

// for (let lineIndex = 1; lineIndex <= middle; lineIndex += 1) {
//   let inputLine = '';
//     for (let columnIndex = 1; columnIndex <= base; columnIndex += 1) {
//         if (columnIndex == left || columnIndex == right || lineIndex == middle) {
//           inputLine += symbol;
//         } else {
//           inputLine += ' ';
//         }
//     }
//     left -= 1;
//     right += 1;
//     console.log(inputLine);
// }




// 9)
let n = 89;
let primo = true;

for (let index = 2; index < n; index += 1) {
  if (n % index === 0) {
    primo = false;
  }
}

console.log(primo);