const readline = require('readline-sync');


const calculateFibonacci = async () => {
  const number = readline.questionInt("What's the nth number? \n");
  if (number > 0 && number % 1 !== 0) {
    console.log("O número deve ser inteiro e maior do que 0");
    return;
  }
  let result = '01';

  for (let i = 2; i <= number; i += 1) {
    result += `${(i -1) + (i - 2)}`;
  }
  console.log(result.slice(1, number + 1));
}

calculateFibonacci();