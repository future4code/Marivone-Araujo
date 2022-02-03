import { Request, Response } from "express";
import  connection  from "../connection"
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

export default async function deleteRecipe(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }
      
    const id = req.params.id;
    await connection("cookenu_recipes").delete().where({ id });

    res.status(201).send("Receita deletada com sucesso");
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
}
