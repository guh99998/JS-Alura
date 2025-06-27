const carro = {
    marca: 'Chevrolet',
    modelo: 'Spin',
    ano: 2024,
    cor: 'cinza',
    ligado: true,
    ligar: function() {
        if(this.ligado) {
            console.log('o carro já está ligado');
        } else {
            this.ligado = true;
        }
    },
    desligar: function() {
        if(!this.ligado) {
            console.log('o carro já está desligado');
        } else {
            this.ligado = false;
        }
    },
    obterDetalhes: function() {
        console.log(`
            Marca: ${this.marca}
            Modelo: ${this.modelo}
            Ano: ${this.ano}
            Cor: ${this.cor}
            Ligado: ${this.ligado}
            `);
    }
}

carro.desligar();

carro.obterDetalhes();

carro.ligar();

carro.obterDetalhes();