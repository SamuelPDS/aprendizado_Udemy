const escola = "123studo"
//informa a letra que está na posição dita
console.log(escola.charAt(4)) 
console.log(escola.charAt(5))
console.log(escola.charAt(3))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

//informa separadamente as letras de acordo com a posição definida
console.log(escola.substring(1))
console.log(escola.substring(0,3))

//concatenação entre as strings
console.log('Escola '.concat(escola).concat(' !'))
console.log(escola.replace(3, 'e'))

//array, divide os números 
console.log('Ana, Maria, Jão, Gabriel'.split(','))
