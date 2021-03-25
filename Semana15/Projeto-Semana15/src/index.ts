import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
const app = express();
app.use(express.json());
app.use(cors());

type account = {
  cpf: number;
  name: string;
  birthDate: string;
  balance: number;
  transactions: transactions[];
};

type transactions = {
  value: number;
  birthDate: string;
  description: string;
};

let bankClients: account[] = [
  {
    cpf: 256369879,
    name: "Angela Maria Souza",
    birthDate: "12/01/1960",
    balance: 0,
    transactions: [],
  },
  {
    cpf: 560963630,
    name: "Pedro Antônio Lemos",
    birthDate: "20/10/2000",
    balance: 0,
    transactions: [],
  },
  {
    cpf: 564897203,
    name: "Fernando Freitas",
    birthDate: "30/12/1980",
    balance: 0,
    transactions: [],
  },
];

app.get("/bankClients/all", (req: Request, res: Response) => {
  res.send(bankClients);
});

app.get("/bankClients/search", (req: Request, res: Response) => {
  const client: string = req.query.client as string;
  const myClients = bankClients;
  const filteredClients = myClients.filter((ct) => {
    return ct.name.includes(client);
  });
  res.status(201).send(filteredClients);
});

app.get("/bankClients", (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const name: string = req.query.name as string;
    const myClients = bankClients;
    const myClient = myClients.find((u) => {
      return u.name === name;
    });
    if (!myClient) {
      errorCode = 404;
      throw new Error("Client not found");
    } else {
      res.status(200).send(myClient);
    }
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
});

app.post("/bankClients", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const reqBody: account = {
      cpf: req.body.cpf,
      name: req.body.name,
      birthDate: req.body.birthDate,
      balance: req.body.balance,
      transactions: req.body.transactions,
    };
    
    let event = new Date (req.body.birthDate)  
    let ageInMilisseconds = Date.now() -event.getTime()
    let ageinYears = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365   

    if ( ageinYears < 18 ) {
        errorCode = 401;
        throw new Error("Unauthorized age");
      }

    if (
      !reqBody.cpf ||
      !reqBody.name ||
      !reqBody.birthDate ||
      isNaN(reqBody.balance) ||
      !reqBody.transactions
    ) {
      errorCode = 422;
      throw new Error("Please check the fields");
    }
    
    bankClients.push(reqBody);
    res.status(201).send({ message: "Client created successfully" });
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
