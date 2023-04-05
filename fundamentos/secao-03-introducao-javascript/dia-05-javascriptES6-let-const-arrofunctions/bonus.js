// FUNÇÃO 1
const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    let array = frase.split(' ');
    for (let index in array) {
        if (array[index] === 'x') {
            array[index] = nome;
        }
    }
    return array.join(' ');
};

const nome = 'Bebeto';

substituaX(nome);



// FUNÇÃO 2

const minhasSkills = (func) => {
    const skills = ['CSS', 'HTML', 'Git'];
    let resultado = `
    ${func}
    
    Minhas três principais habilidades são:`
    for(let index in skills) {
        resultado += `
        - ${skills[index]}`
    }
    return resultado;
};

console.log(minhasSkills(substituaX('Bebeto')));