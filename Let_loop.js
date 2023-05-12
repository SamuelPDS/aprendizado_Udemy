const funcs = []

for (let b = 0; b<10; b++){
    funcs.push(function(){
        console.log(b)
    })
}
funcs[4]()
funcs[9]()
console.log(funcs)