//1. Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.

const novaString = 'Curso JS';
const novoNumero = 45;
const novoBoolean = true;

console.log(`String: ${novaString} | Número: ${novoNumero} | Boolean: ${novoBoolean}`);

//2. Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

const primeiroNome = 'Gustavo';
const segundoNome = 'Lopes';
const nomeCompleto = primeiroNome + ' ' + segundoNome;
const nomeCompletoTemplate = `${primeiroNome} ${segundoNome}`;

console.log(`Primeira variável: ${nomeCompleto} | Segunda variável: ${nomeCompletoTemplate}`);

//3. Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.

const variavelNumero = 23;
const variavelTexto = 'Idade';
const variavelCompleta = `A ${variavelTexto} dele é de ${variavelNumero} anos`;

console.log(variavelCompleta);

//4. Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let novaVariavel = 'Gustavo'

console.log(`Valor inicial da variável: ${novaVariavel}`);

novaVariavel = 'David';

console.log(`Valor da variável após alteração: ${novaVariavel}`);

//5. Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var variavelForaDoBloco = 4;

if (1 > 0) {
    var variavelDentroDoBloco = 3;
    console.log(variavelForaDoBloco);
}

console.log(variavelDentroDoBloco);

//6. Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.

var chovendo = false;

if(chovendo == true) {
    console.log('Levar guarda-chuva');
} else {
    console.log('Não levar guarda-chuva');
}