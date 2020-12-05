/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const carta = comprarCarta();
const jogador1 = comprarCarta()
const jogador1b = comprarCarta()
const jogador2 = comprarCarta()
const jogador2b = comprarCarta()

let resultado1 = jogador1.valor + jogador1.valor
let resultado2 = jogador2.valor + jogador2.valor

let inicio = confirm("Quer iniciar uma nova rodada?")
console.log("Bem-vindo ao jogo de Blackjack!")   
    
   if (inicio == true){
         console.log("Vamos jogar!")      
         
         console.log(`Usuário - cartas: ${jogador1.texto} ${jogador1b.texto} - pontuação ${resultado1}`) 
             
         console.log(`Computador - cartas: ${jogador2.texto} ${jogador2b.texto} - pontuação ${ resultado2}`)
         
      while (resultado1!==resultado2)

         if (resultado1>resultado2) {
                      
            console.log("O usuário ganhou!")
         break
         }else if (resultado1<resultado2){
            console.log("O computador ganhou!")
         break
         }else if(resultado1==resultado2){
            console.log("Empate!")
         break
         }
         
         }else{
         
         console.log("O jogo acabou!")
   }