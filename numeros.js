const peso1 = 1.0;
const peso2 = Number(2,1);

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.898
const avaliacao2 = 7.938
 const total = avaliacao1 * peso1 + avaliacao2 * peso2
 const media = total/(peso1+peso2)

 console.log(media.toFixed(2))
 console.log(media.toString())
 console.log(typeof media)

 console.log((0.1+0.6).toFixed(4))