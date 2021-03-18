// Exercício1 (endpoint embaixo)
// a. O método get é o mais apropriado.
// b. "/users"

// // Exercício2
// a. Como você passou os parâmetros de type para a requisição? Por quê?
//    Cria-se uma constante, faz-se a tipagem de como ela será recebida (nesse caso, string) e os parâmetros de type são recebidos da requisição por query (query parameters)
// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados? Utilizando uma condicional para verificar se type é igual ao userType.

// // Exercício3
// Vamos agora praticar o uso de buscas mais variáveis. Faça agora um endpoint de busca que encontre um usuário buscando por nome.
// a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui? path params
// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.

import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors());

type user = {
  id: number;
  name: string;
  email: string;
  type: string;
  age: number;
};

enum userType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: userType.ADMIN,
    age: 12,
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: userType.NORMAL,
    age: 36,
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: userType.NORMAL,
    age: 21,
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: userType.NORMAL,
    age: 17,
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: userType.ADMIN,
    age: 17,
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: userType.ADMIN,
    age: 60,
  },
];

// Exercicio1
app.get("/users", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    res.send(users);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercicio2
app.get("/users/search", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const type: string = req.query.type as string;
    const myUsersType = users;
    const filteredUsers = myUsersType.filter((us) => {
      return us.type === type;
    });

    if (type in userType) {
      if (filteredUsers.length < 1) {
        errorCode = 404;
        throw new Error("Users not found");
      }
      res.status(201).send(filteredUsers);
    } else {
      errorCode = 400;
      throw new Error("Invalid Type");
    }
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercicio3
app.get("/users/", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const name: string = req.query.name as string;
    const myUsers = users;
    const myUser = myUsers.find((u) =>{return u.name === name})
    if (!myUser){
        errorCode = 400
        throw new Error ("User not found")
    } res.status(200).send({myUser})

  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});







const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
