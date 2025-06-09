//1. Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const arrayExercicio = [100, 200, 300, 400, 500, 600, 700, 800, 900];

for (item of arrayExercicio) {
    console.log(item);
}

//2. Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

function recebeArray (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(i, array[i]);
    }
}

recebeArray(arrayExercicio);

//3. Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

function arrayInteiro (arrayX) {

    somaItens = 0

    for (let numero = 0; numero < arrayX.length; numero++) {
        somaItens += arrayX[numero];
    }

    console.log(somaItens);
}

arrayInteiro(arrayExercicio);

//4. Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.

function arrayMaxMin(arrayY) {
    
    let maior = arrayY[0];
    let menor = arrayY[0];

    for (let i = 1; i < arrayY.length; i++) {
        if (arrayY[i] > maior){
            maior = arrayY[i];
        }
        if (arrayY[i] < menor) {
            menor = arrayY[i];
        }
    }
    return `o maior número é ${maior} e o menor número é ${menor}`;
}

console.log(arrayMaxMin(arrayExercicio));

//5. Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(numeros[i]);
    }
}

//6. Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

somaItensArray = 0

for (let i = 0; i < numeros.length; i++) {
    somaItensArray += numeros[i];
}

let mediaItens = somaItensArray / numeros.length;

console.log(mediaItens);