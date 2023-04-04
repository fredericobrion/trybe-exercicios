// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.

let saldo = 1000;

function adicionaSaldo(valor) {
    return saldo + valor;
};

function removeSaldo(valor) {
    return saldo - valor;
};

function multiplicaSaldo(valor) {
    return saldo * valor;
};

function divideSaldo(valor) {
    return saldo / valor;
};

console.log(adicionaSaldo(300));
console.log(removeSaldo(300));
console.log(multiplicaSaldo(1.5));
console.log(divideSaldo(2));
