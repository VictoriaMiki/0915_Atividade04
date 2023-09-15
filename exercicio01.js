import PromptSync from "prompt-sync"
const prompt = PromptSync()

const valor1 = Number(prompt('Digite o valor 1: '))
const valor2 = Number(prompt('Digite o valor 2: '))
const valor3 = Number(prompt('Digite o valor 3: '))

function maiorValor (valor1, valor2, valor3) {
    let maior = valor1
    
    if (valor2 > valor1 && valor2 > valor3) {
        maior = valor2
    } else if (valor3 > valor1 && valor3 > valor2) {
        maior = valor3
    }

    return maior
}

console.log(maiorValor(valor1, valor2, valor3))