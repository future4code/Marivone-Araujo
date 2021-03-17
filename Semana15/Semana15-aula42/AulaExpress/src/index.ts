import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

// Endpoint 1
app.get("/countries/all", (req: Request, res: Response) => {
  // res.status(200).send(countries)
  const result = countries.map((country) => ({
    id: country.id,
    name: country.name,
  }));

  res.status(200).send(result);
});

// Endpoint 2
app.get("/countries/:id", (req: Request, res: Response) => {
    
    const id: number = Number (req.params.id)

    const result = countries.find((ct) =>{
        return ct.id === id
    })

    if (result) {
        res.status(200).send(result);
    } else{
        res.status(404).send("Not found");
    }    
});

// Endpoint 3
app.get("/countries/search", (req: Request, res: Response) => {

    const name: string = req.query.name as string 
    const myCountries = countries;

    const filteredCountries = myCountries.filter((ct) =>{
        return ct.name.includes(name)
    })

    res.status(200).send(filteredCountries);
});



app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
