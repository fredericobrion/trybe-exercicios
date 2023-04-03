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


// 1) Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.

// function adicionaTurno(object, key, value) {
//     return object[key] = value;
// }

// adicionaTurno(lesson2, 'turno', 'noite');



// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// function listaKey(object) {
//     console.log(Object.keys(object));    
// }

// listaKey(lesson1);



// 3) Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

// function mostraTamanho(obj) {
//     return Object.keys(obj).length;
// }

// console.log(mostraTamanho(lesson1));



// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// function listaValores(obj) {
//     return Object.values(obj);
// }

// console.log(listaValores(lesson3));



// 5) Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3.

let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3,
});



// 6) Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

// function totalAlunos(obj) {
//   let sum = 0;
//   for (let keys in obj) {
//     for (let keys2 in obj[keys]) {
//       if (keys2 === 'numeroEstudantes') {
//         sum += obj[keys][keys2];
//       }
//     }
//   }
//   return sum;
// }
// console.log(totalAlunos(allLessons));



// 7) Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:
