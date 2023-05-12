//Funcao sem Retorno 
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(20, 5)
imprimirSoma(5) 
imprimirSoma(3, 4, 5, 7, 4, 45, 5, 6)


//função com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(4,6))
console.log(soma(5))