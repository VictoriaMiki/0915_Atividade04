import PromptSync from "prompt-sync"
const prompt = PromptSync()

// const vetor = Array(prompt('Digite a lista de números: ')) // Não deu certo

const qtde = Number(prompt('Digite a quantidade de valores da lista: '))
let vetor = new Array(qtde)

for (let i = 0; i < qtde; i++) {
    vetor[i] = Number(prompt(`Digite ${i+1}º valor da lista: `))
}

let maior = vetor[0]
let menor = vetor[0]
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i]
    } else if (vetor[i] < menor) {
        menor = vetor[i]
    }
}

console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)


/* Resolução utilizando apenas um for:

let maior, menor
for (let i = 0; i < qtde; i++) {
    vetor[i] = Number(prompt(`Digite ${i+1}º valor da lista: `))
    if (i == 0) {
        maior = vetor[0]
        menor = vetor[0]
    } else if (vetor[i] > maior) {
        maior = vetor[i]
    } else if (vetor[i] < menor) {
        menor = vetor[i]
    }
}
console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`) */