const pessoa = {
    nome: 'Gustavo',
    notas: [10, 9, 8, 7, 5],
    calcularMediaNotas: function() {
        let soma = this.notas.reduce((acumulador, atual) => acumulador + atual);
        let media = soma/this.notas.length;
        return media;
    },
    classificarDesempenho: function() {
        if (this.media >= 9) {
            return 'Desempenho excelente';
        } else if (this.media >= 7.6) {
            return 'Bom desempenho';
        } else if (this.media >= 6) {
            return 'Desempenho regular';
        } else {
            return 'Desempenho insuficiente';
        }
    }
}

console.log(pessoa.calcularMediaNotas());

console.log(pessoa.classificarDesempenho());