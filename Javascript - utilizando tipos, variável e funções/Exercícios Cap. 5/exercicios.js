//1. Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

function saudacao(nome) {
    return `Olá, ${nome}, seja bem vindo!`;
}

console.log(saudacao('Maria'));

//2. Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.

function verificaIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade';
    } else {
        return 'Menor de idade';
    }
}

console.log(verificaIdade(23));

//3. Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.

function palindromo(palavra) {
    const palavraInvertida = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === palavraInvertida.toLowerCase();
}

console.log(palindromo('Arara'));

//4. Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function valorMaior(primeiroNumero, segundoNumero, terceiroNumero) {
    let maior = primeiroNumero;

    if (segundoNumero > maior) {
        maior = segundoNumero;
    }

    if (terceiroNumero > maior) {
        maior = terceiroNumero;
    }

    return maior;
}

console.log(valorMaior(150, 155, 160));

//5. Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => Math.pow(base, expoente);

console.log(calculaPotencia(5, 2));