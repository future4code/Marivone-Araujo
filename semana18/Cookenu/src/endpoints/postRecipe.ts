import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import generateId from "../services/idGenerator";
import { authenticationData, recipe } from "../types";

export default async function postRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { title, description } = req.body;

    if (!title || !description ) {
      res.statusCode = 422;
      throw new Error("Preencha os campos 'title' e'description'");
    }
    const id: string = generateId();

    const access_token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(access_token);

    const recipe: recipe = { id, user_id: tokenData?.id!, title, description};
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
