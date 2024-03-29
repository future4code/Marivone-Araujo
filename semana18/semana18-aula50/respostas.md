### Exercício 1

##### a. Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?

Os ids gerados como strings são bem seguros; gerados aleatórios e de longas combinações têm mínima chance de repetição.

##### b. feito

### Exercício 2

##### a. O código é uma função assíncrona responsável por inserir um usuário no banco de dados, na tabela de nome "userTableName".

##### b. Utilizei o template da aula:

```sql
CREATE TABLE IF NOT EXISTS to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);
```

##### c. Utilizei a função da aula:

arquivo createUser.ts na pasta endpoints

### Exercício 3

##### a. O que a linha as string faz? Por que precisamos usar ela ali? Ela força que a string chave usada para gerar as assinaturas seja aceita pelo typescript, informando que seu valor não é undefined; que ele apenas foi realocado para o .env, com a finalidade de proteção de dados.

##### b. Agora, crie a função que gere o token. Além disso, crie um type para representar o input dessa função: Criei a função generateToken no arquivo authenticator.ts e no arquivo types está o authenticationData

### Exercício 4

##### a. Crie o endpoint que realize isso, com as funções que você implementou anteriormente: utilizei o template -->

##### b. Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`:

Arquivo: createUser, na pasta endpoints:


```tsx
if (!email || email.indexOf("@") === -1 || email === "") {
         res.statusCode = 422
         throw new Error("Email inválido: preencha o campo indicado ou inclua um @");
}

Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais:

 if (!password || password.length < 6) {
         res.statusCode = 422
         throw new Error("Senha inválida");
       }

```

### Exercício 5

##### a. Crie uma função que retorne as informações de um usuário a partir do email:

```tsx
const getUserByEmail = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const email = req.params.email;
    const result = await connection.raw(`
        SELECT * FROM to_do_list_users
	    WHERE email = "${email}"
    `);

    res.send(result[0]);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default getUserByEmail;
```

### Exercício 6

##### a e b: podem ser visualizadas no endpoint "login" e request.rest

### Exercício 7

##### a. as any indica o valor da tipagem, que, no caso, será qualquer um (number, string, etc)

##### b. Função criada e pode ser vista no arquivo authenticator.ts, em services, em src
