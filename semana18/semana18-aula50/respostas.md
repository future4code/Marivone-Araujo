<!-- Exercício 1 -->

<!-- 1. a -->
<!-- a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números? Os ids gerados como strings são bem seguros; gerados aleatórios e de longas combinações têm mínima chance de repetição. -->

<!-- 1. b. feito -->

<!-- Exercício 2 -->

<!-- a. O código é uma função assíncrona responsável por inserir um usuário no banco de dados, na tabela de nome "userTableName".

<!-- b. Utilizei o template da aula:
CREATE TABLE IF NOT EXISTS to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);
 -->

<!-- c. Utilizei a função da aula:
arquivo createUser.ts na pasta endpoints
 -->

 <!-- Exercício 3 -->


<!-- a. O que a linha as string faz? Por que precisamos usar ela ali? Ela força que a string chave usada para gerar as assinaturas seja aceita pelo typescript, informando que seu valor não é undefined; que ele apenas foi realocado para o .env, com a finalidade de proteção de dados.--> 

<!-- b. Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função. Criei a função generateToken no arquivo authenticator.ts e no arquivo types está o authenticationData -->


