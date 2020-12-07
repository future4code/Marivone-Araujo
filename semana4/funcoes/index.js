// Exercícios de interpretação de código
// EXERCÍCIO 1
// a.
// Vai aparecer impresso 10, logo embaixo, 50.
// b. 
// Não apareceria nada porque a função do console.log é imprimir na tela.
// ----------------------------------------------------
// EXERCÍCIO 2
// a. Darvas e Caio, um embaixo do outro no console.
// b. Será impresso Amanda e Caio, um embaixo do outro no console.
// -----------------------------------------------------
// EXERCÍCIO 3

// NÃO FIZ
// -----------------------------------------------------
// Exercícios de escrita de código
// EXERCÍCIO 4
// a.
// function sobreMim(){
    // console.log("Eu sou Marivone, tenho 37 anos, moro em Aracaju e sou estudante.")
// }


// b.

// function cadastro(nome, idade, cidade, estudante){

//     if (estudante == true){
//         estudante = "sou"
//     } else{
//         estudante = "não sou"
// }

//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudante} estudante.`)

// }

// cadastro ("Marivone", 37, "Aracaju", true)

// ------------------------------------------------------
// EXERCÍCIO 5
// a. 
// function somaNumeros(num1, num2){
//     const soma = Number((num1 + num2))
//     return soma
// }
// const resultado = somaNumeros(2,3)
// console.log (resultado)


// b.
// function maiorOuIgual(num1, num2){
        
//         if(num1 > num2){
//             console.log(num1 + " é maior")
//         } else if(num1 == num2){
//             console.log(num1 + " e " + num2 + " são iguais")
//         } else{
//             console.log(num1 + " é menor")
//         }    

// }
// maiorOuIgual(5,5)


// c.
// function incentivo(frase){
    
//     for (i=1; i<11; i++)

//     console.log(frase)
// }

// incentivo("Vamos que vamos!") 

// -----------------------------------------------------
// EXERCÍCIO 6

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// // a. 
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22] 
// for(let numero in array){
//     console.log(numero)
// }

// b. 
// function par(numero){
//     if (numero % 2 === 0){
//         console.log(numero + " é par.") 
//     }else{
//         console.log(numero + " é impar.")    
//     }
// }
// par (5) 

// c. 
// function numeroPar(){  
//     const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
//     let array2 = []
    
//     for (i of array1){
//         if (i % 2 == 0){
//             array2.push(i) 
//         }
//     }
//     console.log(array2.length)
//     console.log(array2)       

// }
// numeroPar()

// d. Reescreva seu código anterior (do item c) de tal forma que ele utilize a função do item b para verificar se o número é par

// const array1 = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function par(numero){
//     if (numero % 2 === 0){
//         console.log(numero + " é par.") 
//     }else{
//         console.log(numero + " é impar.")    
//     }
// }
//     for (i of array1){
//         par(i)
//     }




    