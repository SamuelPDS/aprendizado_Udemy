var imprimirNota = function(nota){
switch(Math.floor(nota)){
    case 10:
    case 9 :
        console.log('Parabéns!')
    break

    case 8:
    case 7:
    case 6:
        console.log('Aprovado')
    break

    
    case 5 :
    case 4:
    console.log('Abaixo da media!')
    break

    case 3 :
    case 2:
        case 1:
            case 1:
    console.log('reprovado!')
    break

    default:
        console.log('Nota inválida!!!')
    
}           
} 

imprimirNota(10)

imprimirNota(7)

imprimirNota(5)

//imprimirNota(3)

//imprimirNota(23)