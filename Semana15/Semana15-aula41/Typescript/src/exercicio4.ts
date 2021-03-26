// a) Como você faria, já com a extensão instalada, para gerar um arquivo javascript a partir do  arquivo typescript com o código abaixo?

// Rodar os comandos "tsc index.ts" e "node index.js" no terminal.

// b.  E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças. 
// Sim. considerando que o arquivo typescript se chama "index.js", incluiria no package.json o comando "start": "tsc && node ./build/index.js", e rodaria npm run start no terminal; isso automaticamente criaria o arquivo js.


// c. Existe. Utilizando o comendo "tsc *.ts"

// d. Criei o tsconfig.json no início das atividades.
    