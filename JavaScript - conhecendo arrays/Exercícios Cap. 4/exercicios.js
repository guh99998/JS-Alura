//1. Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.

const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach((numero, indice) => console.log(numero, indice));

//2. Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, callbackFunction) {
    return array.forEach((elemento) => {
        const resultado = callbackFunction(elemento);
        console.log(resultado);
        });
}

function operacaoMatematica(numero) {
    return numero + 5;
}

console.log(executaOperacaoEmArray(numeros, operacaoMatematica));

//3. Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

let numeroProcurado = 6;

function verificaNumeroArray(arrayEscolhido, numero) {

    let indiceEncontrado = -1;

    arrayEscolhido.forEach((elemento, indice) => {
        if (elemento === numero) {
            indiceEncontrado = indice;
        }
    });

    if (indiceEncontrado !== -1) {
        console.log(`O número buscado está no índice: ${indiceEncontrado}`);
    } else {
        console.log(-1);
    }
}

verificaNumeroArray(numeros, numeroProcurado);

//4. Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);

const alunoProcurado = 'Gustavo Lopes';

const resultadoBusca = todasAsTurmas.find(nome => nome === alunoProcurado);

if (resultadoBusca) {
    console.log(`Aluno encontrado: ${resultadoBusca}`);
} else {
    console.log('Aluno não encontrado');
}

//5. Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.

numeros.forEach((numero) => {
    console.log(numero * 5);
});

const numeroProcuradoIndice = numeros.findIndex(numero => numero === 18);

console.log(`O número 18 está no índice: ${numeroProcuradoIndice}`);