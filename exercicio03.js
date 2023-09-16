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
for (let i = 1; i < vetor.length; i++) {
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

// Resolução do Professor:

const listaValores = [2,9,7,1,10] // Apesar de const, é possível manipular o Array (push e pop). Apenas não é possível sobrescrever o Array com outro Array. Ex: listaValores[2] = 5 (é possível). listaValores = [4,8,6] (não é possível)
let maiorValorLista = listaValores[0]
let menorValorLista = listaValores[0]

for (let i = 1; i < listaValores.length; i++) { // Começa do 1, pois não é necessário comparar o 0, já que inicializamos o maior e o menor como listaValores[0]
    if(listaValores[i] > maiorValorLista){
        maiorValorLista = listaValores[i]
    }
    if(listaValores[i] < menorValorLista){
        menorValorLista = listaValores[i]
    }
}

function compareNumbers(a, b) {
    return a - b;
}
console.log(listaValores.sort(compareNumbers)) // Ordena o Array em ordem crescente. Assim, só precisa printar o primeiro e o último valor do Array

console.log(maiorValorLista,menorValorLista)
