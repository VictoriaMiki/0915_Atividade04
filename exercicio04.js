import PromptSync from "prompt-sync"
const prompt = PromptSync()

let matriz = new Array()
let vetorPessoa = new Array()

let cont = 0 // contagem de linhas da matriz
while (true) {
    const nome = prompt('Digite o nome: ')
    if (nome === "") break

    vetorPessoa[0] = nome
    
    while (true) {
        let hobby = prompt('Digite o hobby: ')
        if (hobby === "") break

        vetorPessoa.push(hobby)
    }

    matriz[cont] = vetorPessoa // Adiciona vetor na matriz (Linha)
    vetorPessoa = [] // Esvazia vetor 
    cont++
}

console.log("")
console.log("Lista de Clientes e seus Hobbies:")

let linha = ""
for (let i = 0; i < cont; i++) {
    linha += matriz[i][0] + " | "
    for (let j = 1; j < matriz[i].length; j++) {
        if (j != matriz[i].length - 1) { // Se o j não é o último da linha, então: 
            linha += matriz[i][j] + ", "
        } else { 
            linha += matriz[i][j] // Não terá "," depois do último
        }
    }
    console.log(linha)
    linha = "" // Limpa a string linha
}

// Resolução do Professor: 

let nomePessoa = prompt("Digite o nome da pessoa: ")
let textoPessoa = ''
while(nomePessoa != ''){
    textoPessoa += `${nomePessoa} | `
    let hobbyPessoa = prompt("Digite um hobby da pessoa: ")
    while(hobbyPessoa != ''){
        textoPessoa += `${hobbyPessoa},`
        hobbyPessoa = prompt("Digite outro hobby da pessoa (ou vazio para sair): ")
    }
    textoPessoa = textoPessoa.slice(0,-1) // Tira o último caractere do textoPessoa, no caso, tira a "," que estava sobrando
    textoPessoa += '\r\n' // Quebra de linha
    nomePessoa = prompt("Digite o nome de outra pessoa (vazio para sair): ")
}
console.log(textoPessoa)