const pessoa = {
    nome: 'Gustavo',
    idade: 23,
    solteiro: true,
    hobbies: ['estudar', 'treinar', 'competições']
}

function mostrarInfoPessoa(objetoPessoa) {
    console.log(`
        Nome: ${objetoPessoa.nome} | tipo: ${typeof(objetoPessoa.nome)}
        Idade: ${objetoPessoa.idade} | tipo: ${typeof(objetoPessoa.idade)}
        Solteiro: ${objetoPessoa.solteiro} | tipo: ${typeof(objetoPessoa.solteiro)}
        Hobbies: ${objetoPessoa.hobbies.slice()} | tipo: ${typeof(objetoPessoa.hobbies)}
        Endereço: ${objetoPessoa.endereco.rua}, ${objetoPessoa.endereco.cidade} (${objetoPessoa.endereco.estado}) | tipo (rua): ${typeof(objetoPessoa.endereco.rua)} | tipo (cidade) ${typeof(objetoPessoa.endereco.cidade)} | tipo (estado): ${typeof(objetoPessoa.endereco.estado)} | tipo (endereco): ${typeof(objetoPessoa.endereco)}`);
}

pessoa.endereco = {
    rua: 'Rua Florianópolis',
    cidade: 'Monte Sião',
    estado: 'Minas Gerais'
}

mostrarInfoPessoa(pessoa);
