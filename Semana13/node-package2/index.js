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

console.log(`${process.argv[2]} ${process.argv[3]} ${process.argv[4]}`)


