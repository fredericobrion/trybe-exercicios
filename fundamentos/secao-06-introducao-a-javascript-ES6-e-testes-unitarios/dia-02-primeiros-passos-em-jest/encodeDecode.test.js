const {encode, decode} = require('./encodeDecode');

describe('Testa a função encode', () => {
    it('testa se encode() é uma função', () => {
        expect(typeof encode).toBe('function');
    })
    it('testa se converte a em 1', () => {
        expect(encode('ana')).toBe('1n1');
    })
    it('testa se converte e em 2', () => {
        expect(encode('ele')).toBe('2l2');
    })
    it('testa se converte i em 3', () => {
        expect(encode('xixi')).toBe('x3x3');
    })
    it('testa se converte o em 4', () => {
        expect(encode('ovo')).toBe('4v4');
    })
    it('testa se converte u em 5', () => {
        expect(encode('uvu')).toBe('5v5');
    })
    it('testa se possui o mesmo número de caracteres', () => {
        expect(encode('testando').length).toBe(8);
    })
})

describe('Testa a função decode', () => {
    it('testa se decode() é uma função', () => {
        expect(typeof decode).toBe('function');
    })
    it('testa se converte 1 em a', () => {
        expect(decode('1n1')).toBe('ana');
    })
    it('testa se converte 2 em e', () => {
        expect(decode('2l2')).toBe('ele');
    })
    it('testa se converte 3 em i', () => {
        expect(decode('x3x3')).toBe('xixi');
    })
    it('testa se converte 4 em o', () => {
        expect(decode('4v4')).toBe('ovo');
    })
    it('testa se converte 1 em a', () => {
        expect(decode('5v5')).toBe('uvu');
    })
    it('testa se possui o mesmo número de caracteres', () => {
        expect(decode('t2st1nd4').length).toBe(8);
    })
})