// 1) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
const conversao = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function converteNumero (string) {
    let arrayRomanos = string.split('');
    let sum = 0;
    let numeroAtual = 0;
    let numeroProximo = 0;
    for (let index = 0; index < string.length; index += 1)
     {
        for (let keys in conversao) {
                if (arrayRomanos[index] === keys) {
                    numeroAtual = conversao[keys];
                }
                if (arrayRomanos[index+1] === keys) {
                    numeroProximo = conversao[keys];
                }
                
            }
            const conferirMaior = numeroAtual < numeroProximo ? sum -= numeroAtual : sum += numeroAtual;
            numeroAtual = 0;
            numeroProximo = 0;        
        }
    return sum;    
}



// 2)  Crie uma função chamada arrayOfNumbers, que receberá a variável vector como parâmetro. Por meio de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado pela função no fim.

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumber = (vector) => {
    let emptyArray = [];
    for (let index = 0; index < vector.length; index += 1) {
        for (let index2 in vector[index]) {
            if (vector[index][index2] % 2 === 0) {
                emptyArray.push(vector[index][index2]);
            }
        }
    }
    return emptyArray;
};



// 3) Por meio do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’] deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

let basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];

const countFruits = (array) => {
    const object = {};
    for (let index = 0; index < array.length; index +=1) {
        let fruit = array[index];
        if (!object[fruit]) object[fruit] = 0;
        object[fruit] += 1;
    }
    return object;
};



// 4) Com base no objeto a seguir, faça o que se pede.
// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.
// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois, faça o mesmo para os moradores do bloco 2.

let moradores = {
    blocoUm: [
      {
        nome: 'Luíza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

// const bloco = 'blocoDois';

// let name = Object.values(moradores[bloco][1])[0];
// let lastName = Object.values(moradores[bloco][1])[1];
// let floor = Object.values(moradores[bloco][1])[2];
// let apartment = Object.values(moradores[bloco][1])[3];

// console.log(`O morador do bloco 2 de nome ${name} ${lastName} mora no ${floor}º andar, apartamento ${apartment}.`);

const printResidents = (bloco) => {
    let residents = Object.values(moradores[bloco]);
    for (let index in residents) {
        let name = (Object.values(residents[index]))[0];
        let lastName = (Object.values(residents[index]))[1];
        console.log(`${name} ${lastName}`);
    }
};

// printResidents('blocoUm');
// printResidents('blocoDois');



// 5) Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função para contar o número de estudantes que assistiram às aulas de Matemática.
// Com o uso do objeto (allLessons) obtido nos exercícios anteriores, crie uma função que retorne um objeto que represente o relatório da pessoa instrutora, as aulas ministradas e o número total de estudantes. A saída deverá ser a seguinte:

let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  let allLessons = Object.assign({}, {
    lesson1: lesson1,
    lesson2: lesson2,
    lesson3: lesson3,
  });

const countStudents = (materia) => {
    let count = 0;
    let lessons = Object.values(allLessons);
    for (let index in lessons) {
        if ( lessons[index]['materia'] === materia) {
            count += lessons[index]['numeroEstudantes'];
        }
    }
    return count;
};


const createReport = (object, professorName) => {
    const professorObject = {
        professor: professorName,
        aulas: [],
        estudantes: 0,
    };
    for (let index in object) {
        // console.log(object[index]);
        if (object[index]['professor'] === 'Maria Clara') {
            (professorObject.aulas).push(object[index]['materia']);
            professorObject.estudantes += object[index]['numeroEstudantes']
        }
    }
    return professorObject;
};

console.log(createReport(allLessons, 'Maria Clara'));