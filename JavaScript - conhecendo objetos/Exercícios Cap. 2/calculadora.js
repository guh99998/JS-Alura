const calculadora = {
    soma: function(a, b) {
        return a + b;
    },
    subtracao: function(a, b) {
        return a - b;
    },
    multiplicacao: function(a, b) {
        return a * b;
    },
    divisao: function(a, b) {
        return a / b;
    }
}

console.log(calculadora.soma(20, 20));
console.log(calculadora.subtracao(30, 20));
console.log(calculadora.multiplicacao(2, 3));
console.log(calculadora.divisao(30, 10));

calculadora.calcularMedia = function (arrayDeNumeros) {
    let soma = arrayDeNumeros.reduce((acumulado,numero) => acumulado + numero);
    let media = soma / arrayDeNumeros.length;
    return media;
}

numeros = [1, 2, 3, 4, 5];

console.log(calculadora.calcularMedia(numeros));