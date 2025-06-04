//1. Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldoBancario = 1500;
let valorDeposito = 200;
let valorSaque = 300;
let operacao = saldoBancario + valorDeposito - valorSaque;

console.log(`Saldo atual: R$${operacao},00`);

//2. Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

let numero = 4;
let verificarNumero = numero % 2 == 0 ? 'par' : 'impar';

console.log(verificarNumero);

//3. Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

let usuarioLogado = true;
let usuarioAdm = false;

let usuarioPermissao = usuarioLogado && usuarioAdm ? 'Acesso ao sistema e permissão de administrador concedida' : 'Acesso ao sistema negado';

console.log(usuarioPermissao);

//4. Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

let primeiraVariavel = true;
let segundaVariavel = false;

let resultado = primeiraVariavel || segundaVariavel ? 'Uma das variáveis é verdadeira' : 'Nenhuma variável é verdadeira';

console.log(resultado);

//5. Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

let idadeMin = 18;
let idadeUsuario = 20;

if (idadeUsuario >= idadeMin) {
    console.log('Pode realizar a compra do ingresso');
} else {
    console.log('Não pode realizar a compra do ingresso');
}