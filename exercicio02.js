import PromptSync from "prompt-sync"
const prompt = PromptSync()

const numero = Number(prompt('Digite o número da tabuada: '))
const limite = Number(prompt('Digite o número limite da tabuada: '))

function tabuada(numero, limite) {
    for (let i = 1; i <= limite; i++) {
        const total = numero * i
        console.log(`${i} x ${numero} = ${total}`)
    }
}

tabuada(numero, limite)