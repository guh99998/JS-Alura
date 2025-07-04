1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.

Exemplo:

{
    "produtos": [
        {
            "id": 1,
            "nome": "Camiseta",
            "preco": 25.99
        },
        {
            "id": 2,
            "nome": "Calça Jeans",
            "preco": 49.99
        }
    ],
    "usuarios": [
        {
            "id": 101,
            "nome": "João",
            "email": "joao@example.com"
        },
        {
            "id": 102,
            "nome": "Maria",
            "email": "maria@example.com"
        }
    ]
}

Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.

Imprima no console o conteúdo importado utilizando a função console.log().

Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.

2 - Crie um arquivo chamado dados.json contendo informações em formato JSON. O arquivo pode representar, por exemplo, dados de produtos de uma loja ou qualquer outra informação que você deseje.

Exemplo

{
    "produtos": [
        {
            "id": 1,
            "nome": "Camiseta",
            "preco": 25.99
        },
        {
            "id": 2,
            "nome": "Calça Jeans",
            "preco": 49.99
        }
    ],
    "usuarios": [
        {
            "id": 101,
            "nome": "João",
            "email": "joao@example.com"
        },
        {
            "id": 102,
            "nome": "Maria",
            "email": "maria@example.com"
        }
    ]
}

Em seguida, crie um arquivo chamado lerArquivoJson.js. Dentro dele, utilize o método require para importar o conteúdo do arquivo dados.json.

Imprima no console o objeto JavaScript resultante da leitura do arquivo.

3 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:

id (number): identificador do produto.
nome (string): nome do produto.
preco (number): preço do produto.
Exemplo

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.

4 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.

Exemplo de animais.json:

{
    "animais": [
        {
            "id": 1,
            "nome": "Leão",
            "tipo": "Mamífero",
            "habitat": "Savana"
        },
        {
            "id": 2,
            "nome": "Pinguim",
            "tipo": "Ave",
            "habitat": "Pólo Sul"
        },
        {
            "id": 3,
            "nome": "Cobra",
            "tipo": "Réptil",
            "habitat": "Floresta Tropical"
        }
    ]
}

Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:

a) Leia o conteúdo do arquivo animais.json.

b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().

c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.

d) Modifique o habitat de um animal existente no array de animais.

e) Remova um animal do array de animais.

f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().

g) Imprima no console o objeto JavaScript resultante das operações.

5 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:

id (number): identificador da pessoa.
nome (string): nome da pessoa.
idade (number): idade da pessoa
Exemplo

const pessoaOriginal = {
    id: 1,
    nome: "Alice",
    idade: 30
}

Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.

Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.

Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.