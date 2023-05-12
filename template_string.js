//DEVE-SE UTILIZAR CRASE NO CASO DOS TEMPLATES
var nome = 'Ana' 
const concat = 'Olá ' +nome +'!'
const template = `Olá, ${nome} !`
console.log(concat)
console.log(template)

//expressões
console.log(`1 + 1 = ${1+1}`)

var up = t => t.toUpperCase()
console.log(`Ei... ${up('Cuidado!')}`)