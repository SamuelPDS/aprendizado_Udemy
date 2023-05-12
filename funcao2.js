//armazenar funcao em variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(4,2)


//Utilizando Arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(30, 40))

//retorno implícito
const mult = (b, c) => b*c
console.log(mult(4, 6))

const imp = a => console.log(a)
imp('Olá!')