const carro = {
    marca: 'Chevrolet',
    modelo: 'Spin',
    ano: 2024,
    cor: 'cinza'
}

const carroNovoComDetalhes = {
    ...carro
}

console.log(carroNovoComDetalhes)