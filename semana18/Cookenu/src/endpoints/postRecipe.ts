import { Request, Response } from "express";
import connection from "../connection";
import generateId from "../services/idGenerator";
import { recipe } from "../types";

export default async function postRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { title, method } = req.body;

    if (!title || !method ) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'title' e'method'");
    }
    const id: string = generateId();

    const date = Date.now(); 
    
    const recipe: recipe = { user_id: id, title, method, date };
    await connection("cookenu_recipes").insert(recipe);
    res.status(201).send({ recipe });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send(error.message);
    } else {
      res.send({ message: error.message });
    }
  }
}
