const createItem = require('./createItem');

describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 5, 1)).toEqual({name: 'banana', quantity: 1, unit: 'kg', price: 5,});
  });
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 5)).toEqual({name: 'banana', quantity: 0, unit: 'kg', price: 5,});
  });
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow(Error);
  });
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1.99, 'kg', 'banana', 20)).toThrow('O nome do item deve ser uma string');
  });
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01, 2)).toThrow('O preço do item deve ser maior que zero');
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0, 2)).toThrow('O preço do item deve ser maior que zero');
  });
});