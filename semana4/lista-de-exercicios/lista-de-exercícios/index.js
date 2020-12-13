console.log("Olá mundo!")
// Recomendamos que cada exercício esteja dentro de uma função.


// Exercícios de interpretação de código
1.
// É uma função que tem o objetivo de informar o valor em reais, de um valor em dolar, após receber a informação (via prompt) da cotação do dólar naquele momento. A função "ConversorDeMoeda" pergunta ao usuário, via prompt, o valor da cotação do dólar no momento, e o valor inserido (que será guardado na variável "cotacao") será multiplicado pelo valorEmDolar (que é o parâmetro da função ConversorDeMoeda) e guardado no return. Quando a função é chamada, a variável meuDinheiro recebe o retorno dela e usa o parâmetro 100 para executar a função. O valor impresso será o valor inserido no prompt multiplicado por 100.

// 2. É uma função que tem como objetivo retornar o rendimento do valor que o usuário insere, de acordo com o investimento escolhido. É uma função chamada investeDinheiro que tem dois parâmetros: tipoDeInvestimento e valor. O parâmetro tipoDeInvestimento vai ser executado de acordo com cada opção escolhida pelo usuário (inserida na condicional switch), e o resultado será guardado na variável valorAposInvestimento. Já o parâmetro valor recebe um número, que indica o montante que o usuário deseja investir. Primeiro, vai imprimir no console: Ações 165, e o segundo:TIPO DE INVESTIMETO INFORMADO INCORRETO, porque Tesouro Direto não é uma condicional do switch. 

// 3. É um código que contém três arrays, uma com valores e outras duas vazias, seguido de uma estrutura condiconal (for...of) que testa se os itens do primeiro array, array numeros, são pares ou não. Sendo pares, os números são incluídos (por meio da função/método push) na array1, mas caso não sejam pares, os números são inseridos na array2. O comando vai imprimir no console a frase: Quantidade total de números 12. Em outra linha vai imprimir 5 e em outra linha vai imprimir 7. Esses dois últimos indicam a extensão das novas array (.lenght serve para descobrir o tamanho da array).

// 4. É um código que contém uma array de números chamada numeros, uma variável chamada numero1 que recebe o valor infinity e uma variável chamada numero2 que recebe o valor zero. Todos são seguidos de uma estrutura condicional (for...of) onde as variáveis numero1 e numero2 recebem novos valores conforme a condição imposta: primeiro, se o numero da array numeros for menor que o numero1, numero1 vai ser igual a este numero; segundo, se o numero da array de numeros for maior que numero2, numero2 vai ser igual a este numero. Infinity é maior que qualquer número positivo. Assim, o console vai imprimir em uma linha -10 (número negatico) e na linha abaixo 1590 (o maior número da lista). 

// ------------------------------------------------
// Exercícios de Lógica de Programação
1.
// // Três maneiras de iterar array são: for, for...of e while.  

// function numeros() {
    
//     let lista = ["a", "b", "c", "d", "e", "f"]

//     // for

//     for (let i=0; i < lista.length; i++){
//         console.log(lista[i])
//     }

//     // for of

//     for (const i of lista){
//         console.log(i)
//     }

//     lista.forEach((item, index, array) => {
//         console.log("Elemento:", item),
//         console.log("Index:", index),
//         console.log("Array:",array)
//     })
    
// }    

// numeros() 

// 2. 
// a. false; b. false; c. true; d. true; e. true

// 3. 
// O código não funciona porque falta atribuir corretamente valores às variáveis. Corrigir a condição a ser testada no while (no caso, deseja-se que ela termine antes do valor i que será inserido). Também falta o incremento para que o bloco de código seja executado a cada iteração.  

// let quantidadeDeNumerosPares = 0
// let i = Number(prompt( "Digite um número"))

// while(quantidadeDeNumerosPares < i) {
//   console.log(quantidadeDeNumerosPares*2)
//   quantidadeDeNumerosPares++
// }
4.
// function tamanhoTriangulo(lado1, lado2, lado3) {
    
//     if (lado1 === lado2 && lado2 === lado3 && lado3 ===lado1){
//     console.log("O triângulo é equilátero")
    
//     } else if(lado1 !== lado2 && lado2 !== lado3 && lado3 !== lado1){
//     console.log("O triângulo é escaleno")
    
//     } else{
//     console.log("O triângulo é isósceles")
// } 
    
// }  

// tamanhoTriangulo (7,8,8)
// tamanhoTriangulo (10,10,10)
// tamanhoTriangulo (9,8,7)]

 
5.
function calculaMaiorMenor() {
    
let a = Number(prompt(`Digite um número:`))
let b = Number(prompt(`Digite outro número:`))

if (a>b){
    console.log (`O maior é: ${a}`)
} else{
    console.log (`O maior é: ${b}`)
} 

if (a%b === 0){
    console.log (`${a} é divisível por ${b}`)
} else{
    console.log (`${a} não é divisível por ${b}`)
}

if (b%a === 0){
    console.log (`${b} não é divisível por ${a}`)
}else{
    console.log (`${b} não é divisível por ${a}`)
} 


if (a>b){
    console.log(`A diferença entre eles é`, a - b)
}else{
    console.log(`A diferença entre eles é`, b -a)
} 
}

calculaMaiorMenor()
