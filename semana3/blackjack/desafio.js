/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    let carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

//  DESAFIO

let carta = comprarCarta();
let jogador1 = comprarCarta()
let jogador1b = comprarCarta()
let jogador2 = comprarCarta()
let jogador2b = comprarCarta()

let resultado1 = jogador1.valor + jogador1.valor 
let resultado2 = jogador2.valor + jogador2.valor

let inicio = confirm("Quer iniciar uma nova rodada?")
console.log("Bem-vindo ao jogo de Blackjack!")   
    
   if (inicio){
         console.log("Vamos jogar!")  
      
   // 8. 

      if(resultado1!=="A" && resultado1!=="A"){

        
         console.log(`Usuário - cartas: ${jogador1.texto} ${jogador1b.texto} - pontuação ${resultado1}`) 
   
          // 9. 

         let pedeMais = confirm(`Suas cartas são ${jogador1.texto} ${jogador1b.texto}. A carta revelada do computador é ${jogador2.texto}. Deseja comprar mais uma carta?`)

         //  while (pedeMais < jogadorA){
             
         
         // let jogadorA= [comprarCarta()]
         // let compraJogadorA = jogadorA.push(pedeMais)
         // let jogadorB = []

         //  confirm(`Suas cartas são ${jogador1.texto} ${jogador1b.texto} ${compraJogadorA}. A carta revelada do computador é ${jogador2.texto}. Deseja comprar mais uma carta?`)

         //  }
          
          // 10 - A cada carta comprada pelo usuário, a pontuação dele será somada com o valor da nova carta. Ele poderá comprar cartas até atingir a pontuação de 21 pontos; ou até decidir parar de comprar. Assim que o usuário chegar no limite de pontuação, a mensagem de fim de jogo deve ser mostrada, indicando quem venceu. 
         
         

         }else{
            
            console.log("O jogo acabou!")
      }
         
         

         }  
      
