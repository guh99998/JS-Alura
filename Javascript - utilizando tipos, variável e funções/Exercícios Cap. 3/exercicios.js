//1. Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.

let frase = 'Criando uma frase para o exercício';
let fraseTamanho = frase.length;
let fraseMaiuscula = frase.toUpperCase();

console.log(`
    Frase exibida: ${frase}
    Comprimento da frase: ${fraseTamanho}
    Frase maiúscula: ${fraseMaiuscula}`);

//2. Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.

let primeiraVariavel = null;
let segundaVariavel;

console.log(primeiraVariavel, segundaVariavel);

//3. Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

let variavelNumber = 23;
let variavelString = 'Texto aleatório';
let variavelBooleano = true;

let variavelCompleta = `Com a template string eu consigo juntar as variáveis de maneira fácil:
${variavelNumber}, essa foi a variável do tipo number, essa outra é a de tipo string "${variavelString}", e por último essa é a de tipo booleano: ${variavelBooleano}`;

console.log(variavelCompleta);

//4. Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.

let variavelNumerica = 45;
let variavelNumeroString = '20';

let conversaoString = String(variavelNumerica);
let conversaoNumerica = Number(variavelNumeroString);

console.log(`
    ${conversaoString} - ${typeof(conversaoString)}
    ${conversaoNumerica} - ${typeof(conversaoNumerica)}
    `);

//5. Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

let modificandoStringUpper = variavelString.toUpperCase();
let modificandoStringLower = variavelString.toLowerCase();
let modificandoStringSlice = variavelString.slice(0, 5);

console.log(`
    toUpperCase -> ${modificandoStringUpper}
    toLowerCase -> ${modificandoStringLower}
    slice -> ${modificandoStringSlice}
    `);