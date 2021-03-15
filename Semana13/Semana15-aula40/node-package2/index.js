const mathOp = process.argv[2] 
switch (mathOp){
case ("add"):
    console.log( Number(process.argv[3]) + Number(process.argv[4]) )
break
case ("sub"):
    console.log( process.argv[3] - process.argv[4])
break
case ("mult"):
    console.log( process.argv[3] * process.argv[4])
break
case ("div"):
    console.log( process.argv[3] / process.argv[4])
break
}
const num1 = process.argv[3] 
const num2 = process.argv[4] 

if (mathOp && num1 && num2){
    console.log(`\x1b[34m`,`${mathOp} ${num1} ${num2}`)
}else{
console.log(`\x1b[31m`, `Esperava 2 parâmetros só recebi um.`)
}

