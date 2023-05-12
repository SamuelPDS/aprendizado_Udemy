const obj1 = {}
obj1.name = 'bola';
obj1.price = 20;
console.log(obj1.name)
console.log(obj1)

function Obj(nome){
this.nome = nome
this.exec = 'this...'
this.end = function(){
    console.log('bye...')
}
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('mesa')
console.log(obj2)
console.log(obj3)
console.log(obj3.exec)
obj2.end()