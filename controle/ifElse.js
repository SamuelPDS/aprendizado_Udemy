Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this<= fim
}

var imprimirResultado = function(nota){
    if(nota.entre(80,100)){
        console.log('Parabéns!')
    } else if(nota.entre(60,79)){
        console.log('Aprovado!')
    } else if (nota.entre(40,59)){
        console.log('Recuperação')
    } else if(nota.entre(0, 39)){
        console.log('Reprovado')
    } else{
        console.log('Nota errada!')
    }
        console.log('FIM')
}


imprimirResultado(100)
imprimirResultado(60)
imprimirResultado(45)
imprimirResultado(30)
imprimirResultado(120)