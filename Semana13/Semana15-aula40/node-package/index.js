const nome = process.argv[2] 
const idade = Number(process.argv[3])
const idadeFutura = Number(process.argv[4] = Number(process.argv[3]) + 7) 

if (nome && idade){
   
console.log (`\x1b[34m`,`Olá, `+nome+`! Você tem `+idade+` anos. Em sete anos você terá ${process.argv[4]}.`)

}else{
console.log(`\x1b[31m`,`Esperava 2 parâmetros só recebi um.`)
}

