// Situação Problema Cadastro de Peças

// Peso da peça > 100g

let pesoPeca = 150

if (pesoPeca > 100) {
    console.log ("Peso OK. Cadastro autorizado")
    
} else {
    console.log ("Peso da peça insuficiente. Cadastro não autorizado")
}

// Limite de peças na caixa: 10 unidades

let quantidadePeca = 9

if (quantidadePeca > 10) {
    console.log ("Espaço insuficiente na caixa. Cadastro não autorizado")
    
} else {
    console.log("Quantidade OK. Cadastro autorizado")
    }

// Número de caracteres do nome da peça >2

let nomePeca = "Porca"

if (nomePeca.length < 3) {
    console.log("Número caracteres do nome da peça insuficiente. Cadastro não autorizado")
} else {
    console.log("Número caracteres OK. Cadastro autorizado")
    }
