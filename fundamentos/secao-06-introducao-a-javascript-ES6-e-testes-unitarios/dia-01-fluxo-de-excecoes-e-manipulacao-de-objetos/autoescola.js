const checkNameAndAge = (name, age) => {
    if (!name || !age) throw new Error('Todas as informações são necessárias');
    if (age < 18) throw new Error('Ops, infelizmente nesse momento você não pode fazer as aulas');
};


const studentRegister = (name, age) => {
    try {
        checkNameAndAge(name, age);
        return `${name}, seja bem-vindo(a) à AuTrybe!`;
    } catch (error) {
        return error.message
    }
  }

console.log(studentRegister('', 20));
console.log(studentRegister('Frederico', 15));
console.log(studentRegister('Frederico', 28));  
