const carro = {
    marca: 'Chevrolet',
    modelo: 'Spin',
    ano: 2024,
    cor: 'cinza'
}

for (let item in carro) {
    console.log(`${item} -> ${carro[item]}`);
}

carro.proprietario = 'Lucas Guerreiro';

for (let item in carro) {
    console.log(`${item} -> ${carro[item]}`);
}

Object.defineProperty(carro, 'placa', {
    value: 'ABNT250',
    enumerable: false
});

for (let item in carro) {
    console.log(`${item} -> ${carro[item]}`);
}

chavesCarro = Object.keys(carro);
console.log(chavesCarro)

console.log(carro.placa);