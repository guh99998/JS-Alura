const pessoas = [
    {
        nome: 'David',
        idade: 25,
        cidade: 'Monte Sião'
    },
    {
        nome: 'Lucas',
        idade: 28,
        cidade: 'Águas de Lindóia'
    },
    {
        nome: 'Maria Clara',
        idade: 31,
        cidade: 'Monte Sião'
    }
];

function mostrarListaPessoas(listaPessoas) {
    for(let pessoa of listaPessoas) {
        console.log(`
            nome: ${pessoa.nome}
            idade: ${pessoa.idade}
            cidade: ${pessoa.cidade}
            `)
    }
}

pessoas.push({
    nome: 'Gustavo',
    idade: 23,
    cidade: 'Monte Sião'
});

mostrarListaPessoas(pessoas);

function filtrarPorCidade (listaDePessoas, cidade) {
    let resultadoFiltro = listaDePessoas.filter((pessoa) => pessoa.cidade === cidade);
    console.log(resultadoFiltro);
}

filtrarPorCidade(pessoas, 'Monte Sião');
