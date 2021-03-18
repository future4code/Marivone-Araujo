// console.log("Hello,world")

// EXERCÍCIO 2
// a.
// entradas: numeros, a, b
// saídas: estatisticas

// function obterEstatisticas(
//     numeros: number[],  
//     ) {

//     const numerosOrdenados = numeros.sort(
//         (a: number, b:number) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// b. 1. numeros = array de números do type number; 2. a,b = variáveis do método sort do type number; 3. soma = variável to type number; 4. num = variável do for; 5. Um objeto (variável) que armazena 3 propriedades: maior, menor e media;

// c. 

// type estatistica = {
//     maior: number,
//     menor: number,
//     media: number,
// }

// type amostraDeDados = {
// numeros: number[],
// obterEstatisticas: (numeros: number[]) => estatistica 
// }

// const get: estatistica = obterEstatisticas([21, 18, 65, 44, 15, 18]) 
// console.log(get)
