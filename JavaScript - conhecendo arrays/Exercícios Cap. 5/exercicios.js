//1. Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

function juntaArrays(...arrays) {
    return [].concat(...arrays);
}

const numeros = [10, 20, 30, 40, 50];
const nomes = ["Ana", "Bruno", "Carla", "Daniela"];

console.log(juntaArrays(numeros, nomes));

//2. Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [1, 2, 3, 4, 5, 6, 7, 8];

const resultado = valores.reduce((valor, numero) => valor + numero);

console.log(resultado);

//3. Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const todasCores = coresLista1.concat(coresLista2);

const coresFinal = new Set(todasCores);

console.log(coresFinal);

//4. Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

function numerosPares(arrayDeNumeros) {
    const numerosPares = [];

    for (let numero of arrayDeNumeros) {
        if(numero % 2 === 0) {
            numerosPares.push(numero);
        }
    }
    
    return numerosPares;
}

console.log(numerosPares(valores));

//5. Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

function numerosMultiplos(arrayDeNumerosMultiplos) {
    return arrayDeNumerosMultiplos.filter((numero) => numero % 3 === 0 && numero > 5);
}

console.log(numerosMultiplos(valores));

//6. Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function somaArray(arrayDeNumerosParaSoma) {
    return arrayDeNumerosParaSoma.reduce((numero, acumulador) => numero + acumulador);
}

console.log(somaArray(valores));