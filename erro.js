function tratarErroELancar(erro){
    throw new Error('Ocorreu um erro!')
}


function imprimirnomeGrito(obj) {
    try{
        console.log(obj.name.toUpperCase()+ '!!!')
    }
    catch (e){
       tratarErroELancar(e) 
    } finally{
        console.log('FInalizado')
    }
    
}

// const obj = {nome: 'Nascimento'}
const obj = {name: 'Roberto'}
imprimirnomeGrito(obj)
