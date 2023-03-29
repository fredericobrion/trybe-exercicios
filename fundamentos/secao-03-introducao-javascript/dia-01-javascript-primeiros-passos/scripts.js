// EXERCÍCIO 1
// let a = 5;
// let b = 9;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a ** b);
// console.log(a % b);


// EXERCÍCIO 2
// let a = 5;
// let b = 9;

// if (a > b) {
//     console.log(a);
// }
// else {
//     console.log(b);
// }


// EXERCÍCIO 3
// let a = 5;
// let b = 9;
// let c = 58;

// if (a > b && a > c) {
//     console.log(a);
// }
// else if (b > c) {
//     console.log(b);
// }
// else {
//     console.log(c);
// }


// EXERCÍCIO 4
// let valor = 0;

// if (valor > 0) {
//     console.log('positive');
// } else if (valor < 0) {
//     console.log('negative');
// }
// else {
//     console.log('zero');
// }


// EXERCÍCIO 5
// let a = 90;
// let b = 45;
// let c = 45;

// if (a <= 0 || b <= 0|| c <= 0) {
//     console.log('Erro')
// } 
//  else if (a + b + c == 180) {
//      console.log('true');
//  }
//  else {
//      console.log('false')
//  }


// EXERCÍCIO 6
// let peca = 'peão';

// switch (peca) {
//     case 'rei':
//         console.log('Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
//         break;
//     case 'dama':
//         console.log('Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
//         break;
//     case 'torre':
//         console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
//         break;
//     case 'bispo':
//         console.log('Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.');
//         break;
//     case 'cavalo':
//         console.log('É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.');
//     case 'peão':
//         console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.');
//         break;
    
//     default:
//         console.log('Não é uma peça válida');
// }


// EXERCÍCIO 7
// let nota = 88;

// if (nota >= 90 && nota <=100) {
//     console.log('A');
// }
// else if (nota >= 70) {
//     console.log('B');
// }
// else if (nota >= 50) {
//     console.log('C');
// }
// else if (nota >= 45) {
//     console.log('D');
// }
// else if (nota >= 0 && nota < 45) {
//     console.log('F');
// }
// else {
//     console.log('Nota inválida');
// }


// EXERCÍCIO 8
// let a = 5;
// let b = 9;
// let c = 16;

// if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
//     console.log('true');
// } 
// else {
//     console.log('false');
// }


// EXERCÍCIO 9
// let a = 5;
// let b = 9;
// let c = 16;

// if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
//     console.log('true');
// } 
// else {
//     console.log('false');
// }


// EXERCÍCIO 10
// let custo = 1;
// let valorVenda = 2;

// if (valorVenda > custo) {
//     console.log(1000*(valorVenda - custo));
// }
// else {
//     console.log('Não teve lucro');
// }


// EXERCÍCIO 11
let salarioBruto = 6000;
let salarioPosInss;
let salarioLiquido;

if (salarioBruto <= 0) {
    console.log('Salário Inválido')
} else if (salarioBruto <= 1556.94) {
    salarioPosInss = salarioBruto * 0.92;
} else if (salarioBruto <= 2594.92) {
    salarioPosInss = salarioBruto * 0.91;
} else if (salarioBruto <= 5189.82) {
    salarioPosInss = salarioBruto * 0.89;
} else {
    salarioPosInss = salarioBruto - 570.88
}

if (salarioPosInss <= 1903.98) {
    salarioLiquido = salarioPosInss;
} else if (salarioPosInss <= 2826.65) {
    salarioLiquido = salarioPosInss - ((salarioPosInss * 0.075) - 142.80);
} else if (salarioPosInss <= 3751.05) {
    salarioLiquido = salarioPosInss - ((salarioPosInss * 0.15) - 354.80);
} else if (salarioPosInss <= 4664.68) {
    salarioLiquido = salarioPosInss - ((salarioPosInss * 0.225) - 636,13);
} else {
    salarioLiquido = salarioPosInss - ((salarioPosInss * 0.275) - 869.36);
}

console.log(salarioLiquido);