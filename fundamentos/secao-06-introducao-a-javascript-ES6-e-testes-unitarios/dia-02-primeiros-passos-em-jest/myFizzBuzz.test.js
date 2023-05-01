const myFizzBuzz = require('./myFizzBuzz');

describe('Testa a função myFizzBuzz', () => {
    it('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(12)).toBe('fizz');
        expect(myFizzBuzz(25)).toBe('buzz');
        expect(myFizzBuzz(13)).toBe(13);
        expect(myFizzBuzz('3')).toBe(false);
    })
})