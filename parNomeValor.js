/*let a = function(a,b){
    soma = a + b
    console.log(soma)
}

a(3,5)*/
const saudacao = 'Opaaa'

//Pode-se ter o a mesma identificação para variaveis separadas por funcoes
function text(){
    const saudacao = 'Olá! Mundo'
    return saudacao
}
console.log(text())

//Objetos

let dados = {
    nome: 'Samuel',
    idade: 20,
    peso: 71,
    endereco: {
        logradouro: 'Rua abc',
        numero: 123,
        bairro: 'Piratininga',
        cidade: 'Belo Horizonte'
    }
}
console.log(saudacao)
console.log(text())
console.log(dados)