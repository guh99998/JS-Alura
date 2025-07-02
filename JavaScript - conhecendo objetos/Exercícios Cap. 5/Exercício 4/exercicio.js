const animais = [
    { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
    { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
    { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]

function ordenarAnimais(comparacao) {
    return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
    return a.idade - b.idade
}

function compararIdadeDecrescente(a, b) {
    return b.idade - a.idade
}

console.log(ordenarAnimais(compararIdadeCrescente));
console.log(ordenarAnimais(compararIdadeDecrescente));
