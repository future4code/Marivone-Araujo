// console.log("Hello,world")

// Exercício 1

// a) let minhaString: string = 0
// Type 'number' is not assignable to type 'string', ou seja, não é possível designar o tipo 'number' para a variável do tipo 'string'. 

// b) 
// let meuNumero: number = 7
// b.1
// let meuNumero: string | number = 7
// meuNumero = "Olá, Mundo"
// console.log(meuNumero)
// b.2
// let meuNumero: any = 7
// meuNumero = "Olá, Mundo"
// console.log(meuNumero)
// É possível fazer com que essa variável receba número e string atribuindo a ela ou union types (que são os dois valores; string e number) ou o tipo "any" (qualquer um).

// c)
// c.1
// const pessoa: {nome:string, idade:number, corFavorita: string} ={
//     nome: "Luz do Sol",
//     idade: 30,
//     corFavorita: "rosa",
// }
// console.log(pessoa)

// // c.2 e d)
// enum CORES_DO_ARCOIRIS{
//     AMARELO = "AMARELO",
//     VERDE = "VERDE",
//     AZUL = "AZUL",
//     PRETO = "PRETO",
// }

// type pessoa = {
//     nome: string;
//     idade: number;
//     corFavorita: CORES_DO_ARCOIRIS;
// }

// const person1: pessoa = {
//     nome: "Marivone",
//     idade: 38,
//     corFavorita: CORES_DO_ARCOIRIS.AZUL
// }
// const person2: pessoa = {
//     nome: "Felipe",
//     idade: 37,
//     corFavorita: CORES_DO_ARCOIRIS.PRETO
// }
// const person3: pessoa = {
//     nome: "Ivone",
//     idade: 67,
//     corFavorita: CORES_DO_ARCOIRIS.AMARELO
// }

