// 1)
// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// function adicionaCliente(nome) {
//     if (typeof nome === 'string') {
//     clientesTrybeBank.push(nome);
//     } else {
//         return "não é uma string";
//     }
// }

// adicionaCliente('Julia');
// adicionaCliente('Fernando');

// console.log(clientesTrybeBank);


// 2)
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
    let clienteEncontrado = false;
    if (typeof cliente === 'string') {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {        
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'Cliente excluído com sucesso'
            } 
        }
    if (clienteEncontrado === false){
        return 'Cliente não encontrado';
    }   
    }  else {
        return 'Erro: inserir uma string';
    }
    
}

console.log(removeCliente('John'))

// removeCliente('Gus');
// console.log(clientesTrybeBank);
