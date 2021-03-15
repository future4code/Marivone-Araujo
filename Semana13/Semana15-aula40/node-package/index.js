const nome = process.argv[2] 
const idade = Number(process.argv[3])
const idadeFutura = Number(process.argv[4] = Number(process.argv[3]) + 7) 

console.log (`Olá, ${process.argv[2]}! Você tem ${process.argv[3]}. Em sete anos você terá ${process.argv[4]}.`)