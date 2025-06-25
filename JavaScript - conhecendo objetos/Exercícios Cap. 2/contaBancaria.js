const contaBancaria = {
    titular: 'Gustavo Lopes',
    saldo: 1500,
    depositar: function(valor) {
        return this.saldo += valor;
    },
    sacar: function (valor) {
        if(this.saldo > valor) {
            return this.saldo -= valor;
        } else {
            return 'Saldo insuficiente';
        }
    }
}

const cliente = {
    nome: 'Gustavo',
    conta: contaBancaria
}

function mostrarSaldo(titular) {
    console.log(`
        Nome do Cliente: ${titular.nome}
        Saldo da Conta: ${titular.conta.saldo}
        `);
}

cliente.conta.depositar(500);
cliente.conta.sacar(1000);

mostrarSaldo(cliente);