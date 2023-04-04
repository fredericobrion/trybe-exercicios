// 1) 
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
            if (numeroAtual < numeroProximo) {
                sum -= numeroAtual;
            } else {
                sum += numeroAtual;
            }
            numeroAtual = 0;
            numeroProximo = 0;        
        }
    return sum;    
}

console.log(converteNumero('LVII'));
