const objetoAnimais = require('./animais.json');

const novoAnimal = {
    id: 4,
    nome: 'Cachorro',
    tipo: 'Mamífero',
    habitat: 'Residência'
}

objetoAnimais.animais.push(novoAnimal);

const animalParaModificar = objetoAnimais.animais.find(animal => animal.id === 2);
if (animalParaModificar) {
    animalParaModificar.habitat = "Oceano Antártico";
}

const indiceAnimalRemover = objetoAnimais.animais.findIndex(animal => animal.id === 1);
if (indiceAnimalRemover !== -1) {
    objetoAnimais.animais.splice(indiceAnimalRemover, 1);
}

const novaStringJsonAnimais = JSON.stringify(objetoAnimais, null, 2);

console.log("Objeto JavaScript Resultante das Operações:");
console.log(objetoAnimais);