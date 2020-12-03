// Exercícios de interpretação de código
// EXERCICIO 1
// O código está apresentando um laço representando um evento que se repete. A estrutura de repetição apresentada é o for, apresentando um número que é incrementado. Foi atribuído zero à variável "valor", pedido que ela se repita por 5 vezes (a cada repetição, o resultado é guardado na variável e é somado com o incremento posterior) e que a cada repetição seja incrementado 1 (i++). 
// O resultado impresso no console é 10. 


// EXERCICIO 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a. Vão ser impressos os números maiores que 18 presentes na array lista. 

// b. Não é possível. Consigo acessar usando o "for".

// Exercícios de escrita de código
// EXERCICIO 3

const original = [40, 100, 120, 80, 10, 56, 98, 12, 45, 123, 140, 155]

// a.
// for(let numero of original){
//     if (numero>0)
//     console.log(numero)
// }

// b.
// for(let numero of original){
//         if (numero>0)
//         console.log(numero/10)
// }

// // c.
// let originalPares = []
// for(let numero of original){
//     if (numero%2 === 0){
//         originalPares.push(numero)
//     }
// }
// console.log(originalPares)

// d. 

// for(let i = 0; i < original.length; i++){
//     console.log(`O elemento do índex ${i} é ${original[i]},`)
// }

// // e.
// let maior = 0
// let menor = original[0]

// for(num of original){
//     if (num > maior){
//         maior = num
//     }    
//     if (num < menor){
//         menor = num
//     }    
// }
// console.log("O maior número é", maior,"e o menor é", menor)
