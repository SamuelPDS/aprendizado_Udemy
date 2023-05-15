const array = [1,2,3,4,5,6,7,8,9]
for(i in array){
    if(array==2){
        break
    }
    console.log(`${i} = ${array[i]}`)
}

for (y in array){
    if(array==9){
        continue
    }
    console.log(`${y} = ${array[y]}`)

}