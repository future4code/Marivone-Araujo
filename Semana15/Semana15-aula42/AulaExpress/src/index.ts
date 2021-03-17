import express, { Request, Response } from "express";
import cors from "cors";
import { countries, country } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

// Endpoint 1
app.get("/countries/all", (req: Request, res: Response) => {
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));

  res.status(200).send(result);
});

// Endpoint 3
app.get("/countries/search", (req: Request, res: Response) => {
  const name: string = req.query.name as string;
  const capital: string = req.query.capital as string;
  const continent: string = req.query.continent as string;

  let myCountries = countries;

  let result: country[] = [];

  if (name) {
    result = myCountries.filter((ct) => {
      return ct.name.includes(name);
    });
  }
  if (capital) {
    result = myCountries.filter((ct) => {
      return ct.capital.includes(capital);
    });
  }

  if (continent) {
    result = myCountries.filter((ct) => {
      return ct.continent.includes(continent);
    });
  }
  if (result.length) {
    res.status(201).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

// Endpoint 2
app.get("/countries/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);

  const result = countries.find((ct) => {
    return ct.id === id;
  });

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send("Not found");
  }
});

//endpoint 4
// Não consegui fazer

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
