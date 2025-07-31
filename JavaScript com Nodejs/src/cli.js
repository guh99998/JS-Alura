import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { montaSaidaArquivo } from './helpers.js'

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];
const endereco = caminhoArquivo[3];

fs.readFile(link, 'utf-8', (erro, texto) => {
    try {
        if (erro) throw erro
        const resultado = contaPalavras(texto);
        criaESalvaArquivo(resultado, endereco);
    } catch(erro) {
        trataErros(erro);
    }
})

//Usando async/await para fazer a função assíncrona
// async function criaESalvaArquivo(listaPalavras, endereco) {
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);
//     try {
//        await  fs.promises.writeFile(arquivoNovo, textoPalavras);
//         console.log('Arquivo criado!')
//     } catch (erro) {
//         throw erro;
//     }
// }

//Usando then para fazer a função assíncrona
function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras)
    
    fs.promises.writeFile(arquivoNovo, textoPalavras)
    .then(() => {
        console.log('Arquivo criado');
    })
    .catch((erro) => {
      throw erro;  
    })
    .finally(() => console.log('Operação finalizada'));
}