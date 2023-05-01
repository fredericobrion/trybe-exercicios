const myRemove = require('./myRemove');

describe('Testa a função myRemove', () => {
    it('Deve retornar um array removendo o item correto', () => {
        expect( myRemove([1, 2, 3, 4], 3) ).toEqual( [1, 2, 4] );
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    })
})




// test('Recebe o array [1, 2, 3, 4] e o item 3 como parâmetros e espera como resultado [ 1, 2, 3]', () => {
//     expect( myRemove([1, 2, 3, 4], 3) ).toEqual( [1, 2, 4] );
// })

// test('Recebe o array [1, 2, 3, 4] e o item 3 como parâmetros e espera que o resultado não seja [ 1, 2, 3, 4]', () => {
//     expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
// })

// test('Recebe o array [1, 2, 3, 4] e o item 5 como parâmetros e espera que o resultado seja [1, 2, 3, 4]', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
// })