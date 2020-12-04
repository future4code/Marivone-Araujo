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
const jogador2 = comprarCarta()


let inicio = confirm("Quer iniciar uma nova rodada?")
console.log("Bem-vindo ao jogo de Blackjack!")   
      if (inicio == true){
         console.log("Vamos jogar!")
      
      let i = 
      
         console.log(`Usuário - cartas: ${jogador1.texto} ${jogador1.texto} - pontuação ${jogador1.valor + jogador1.valor}`) 
             
         console.log(`Computador - cartas: ${jogador2.texto} ${jogador2.texto} - pontuação ${ jogador2.valor + jogador2.valor}`) 
                   

                 
      }else{
         console.log("O jogo acabou!")
      }
