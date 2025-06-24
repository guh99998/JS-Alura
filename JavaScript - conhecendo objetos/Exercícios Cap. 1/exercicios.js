//1. Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:
// titulo (string): título do livro.
// autor (string): nome do autor do livro.
// anoPublicacao (number): ano de publicação do livro.
// genero (string): gênero do livro.

const livro = {
    titulo: 'Senhor dos Anéis',
    autor: 'J. R. R. Tokien',
    anoPublicacao: 1954,
    genero: 'Ficção'
}

console.log(livro);

//2. Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.

livro.anoAtual = new Date().getFullYear();
livro.idadePublicacao = livro.anoAtual - livro.anoPublicacao;
livro.detalhes = 'O Senhor dos Anéis é um livro de alta fantasia, escrito pelo escritor britânico J. R. R. Tolkien. Escrita entre 1937 e 1949, com muitas partes criadas durante a Segunda Guerra Mundial, a saga é uma continuação de O Hobbit.'
const mostrarDetalhes = `
Detalhes do Livro: ${livro.detalhes}
Idade de Publicação: ${livro.idadePublicacao} anos
`;

console.log(livro);
console.log(mostrarDetalhes);

//3. Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.
livro.avaliacao = null;

const novaAvaliacao = { nota: 4.5, comentario: "Ótima leitura!" };
if (livro.avaliacao === null) {
    livro.avaliacao = novaAvaliacao;
} else {
    console.log("Este livro já possui uma avaliação.");
}

console.log(livro);