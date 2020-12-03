// Exercicios de interpretacao de codigo
// 
// EXERCICIO 1
// a. O código realiza uma pergunta ao usuário e, mediante a resposta, ele informa se usuário passou ou não passou no teste. 
// b. O código testa se o número enviado pelo usuário no prompt é divisível ou não por 2 (ou seja, testa se ele é um número par).
// c. O número par (divisível por 2).
// d. O número impar (não divisível por 2, e que deixa resto de divisão).
// _________________________________
// EXERCICIO 2
// a. O código serve para que o usuário consulte uma fruta e saiba o preço dela. 
// b. Se o valor for Maçã, aparecerá a mensagem com o preco R$2.25 (se escrever com letra minúscula, aparece R$5.).
// c. Aparece o preço que está no default: R$5. 
// _________________________________
// EXERCÍCIO3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }
// console.log(mensagem)

// a.  Está enviando um comando para o usuário, para que ele digite um número. O que for digitado pelo usuário será uma string transformada como variável do tipo 'Number'. O número digitado pelo usuário será guardada na "const numero". 

// b. Considerando o número 10, a mensagem será "Esse número passou no teste". Se for -10, dá erro.

// c. Haverá erro porque não adicionamos o "else" da sintaxe da condicional do bloco if/else. 
// _________________________________



// Exercicios de escrita de codigo
// _________________________________
// EXERCICIO 4

    // const respostaDoUsuario = Number(prompt(`Digite sua idade`));
   
    // if(respostaDoUsuario > 18){
    //     console.log(`Você pode dirigir.`)
    // } else {
    //     console.log(`Você não pode dirigir`)
    // }

// EXERCICIO 5
    
    // const turno = prompt(`Em qual turno você estuda: M, V ou N?`)

    // if(turno === `M`){
    //     console.log(`Bom dia!`)
    // } else if (turno === `V`) {
    //     console.log(`Boa Tarde!`)
    // } else if (turno === `N`){
    //     console.log(`Boa noite!`)
    // }

// EXERCICIO 6
    // const turno = prompt(`Em qual turno você estuda: M, V ou N?`)

    // switch(turno){
    //     case `M`:
    //         console.log(`Bom dia!`)
    //         break
    //     case `V`:
    //         console.log("Boa tarde!")      
    //         break
    //     case `N`:
    //         console.log("Boa noite!")
    //         break    
    //     }

    
// EXERCICIO 7

// const genero = prompt(`Qual é o gênero do filme que você quer assistir?`)
// const valorIngresso = prompt(`Qual é o valor do ingresso?`)  

// if (genero == `fantasia` && valorIngresso < `15`){
//     console.log(`Bom filme!`)
// }else{
//     console.log(`Escolha outro filme! :(`)
// } 


// // DESAFIO 1
// const genero = prompt(`Qual é o gênero do filme que você quer assistir?`)
// const valorIngresso = prompt(`Qual é o valor do ingresso?`)  

// if (genero == `fantasia` && valorIngresso < `15`){
//     let snack = (prompt(`Qual snack você deseja comprar?`))
//     console.log(`Bom filme!`)
//     console.log(`... com ${snack}`)

// }else{
//     console.log(`Escolha outro filme! :(`)
// } 

// DESAFIO2

// let nome = prompt( `Digite seu nome completo:` )

// let tipoDeJogo = prompt( `Digite o tipo de jogo: IN (para internacional) ou DO (para jogo doméstico).`)

// let etapaDoJogo = prompt( `Digite a etapa do jogo: SF (semi-final); DT (terceiro lugar); e FI (final).`)

// let categoria = prompt(`Indique a categoria desejada: 1, 2, 3 ou 4.`)

// let ingressos = Number(prompt(`Informe a quantidade de ingressos:`)) 

// let valorDoIngresso
// let valorDolar
// let valorTotal 

// console.log(`---Dados da Compra ---`)
// console.log(`Nome do cliente: ${nome}`)

//     switch(tipoDeJogo){
//         case `IN`:
//             console.log(`Tipo de Jogo: Internacional`) 
//             break
//         case `DO`:
//             console.log(`Tipo de Jogo: Nacional`)
//             break
//         default:
//             console.log(`Digite novamente`)    
//     }
      
    
//     switch(etapaDoJogo){
//         case `SF`:
//             console.log(`Etapa do Jogo: Semi-Final`) 
//             break
//         case `DT`:
//             console.log(`Etapa do Jogo: Terceiro Lugar`)
//             break
//         case `FI`:
//             console.log(`Etapa do Jogo: Final`)
//             break
//         default:
//             console.log(`Digite novamente`)    
//     }

//     switch(categoria){
//         case `1`:
//             console.log(`Categoria: 1`)
//             break
//         case `2`:
//             console.log(`Categoria: 2`)
//             break
//         case `3`:
//             console.log(`Categoria: 3`)
//             break
//         case `4`:
//             console.log(`Categoria: 4`)
//             break
//         default:
//             console.log(`Digite novamente`)    
//     }

    
    
//     if(etapaDoJogo === `SF` && categoria === `1`){
//         valorDoIngresso = 1320
//         }else if (etapaDoJogo === `SF` && categoria === `2`){
//             valorDoIngresso = 880
//         }else if (etapaDoJogo === `SF` && categoria === `3`){
//             valorDoIngresso = 550
//         }else if (etapaDoJogo === `SF` && categoria === `4`){
//             valorDoIngresso = 220
//         }else if (etapaDoJogo === `DT` && categoria === `1`){
//             valorDoIngresso = 660
//         } else if (etapaDoJogo === `DT` && categoria === `2`){
//             valorDoIngresso = 440
//         } else if (etapaDoJogo === `DT` && categoria === `3`){
//             valorDoIngresso = 330
//         }else if (etapaDoJogo === `DT` && categoria === `4`){
//             valorDoIngresso = 170
//         }else if (etapaDoJogo === `FI` && categoria === `1`){
//             valorDoIngresso = 1980
//         }else if (etapaDoJogo === `FI` && categoria === `2`){
//             valorDoIngresso = 1320
//         }else if (etapaDoJogo === `FI` && categoria === `3`){
//             valorDoIngresso = 880
//         }else if (etapaDoJogo === `FI` && categoria === `4`){
//             valorDoIngresso = 330
//         }  
    

// console.log(`Quantidade de Ingressos: ${ingressos} ingressos`)
// console.log (`---Valores---`)

// if (tipoDeJogo === `IN`){
//         valorDolar = parseInt(valorDoIngresso * 4.10)
//         valorTotal = parseInt((valorDolar * ingressos))
//         console.log(`Valor do Ingresso: $ ${valorDolar}`)
//         console.log (`Valor total: $ ${valorTotal}`)
// }else{
//     valorTotal = parseInt((valorDoIngresso * ingressos))
//     console.log(`Valor do Ingresso: R$ ${valorDoIngresso}`)
//     console.log (`Valor total: R$ ${valorTotal}`)
// } 






