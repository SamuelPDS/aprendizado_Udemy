var obj = {
    nome: 'cadeira',
    cor: 'marron',
    preco: 23,
    marca: 'ABCmoveis'
}

var{cor, nome} = obj
console.log(nome, cor) 

const {nome: n, cor:i} = obj
console.log(n,i)

const{materiaprima, promocao = true} = obj
console.log(materiaprima, promocao)
