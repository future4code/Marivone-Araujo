import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

const getRecipe = async (req: Request, res: Response) => {
  try {

    
    const id = req.params.id
    
    const access_token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(access_token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Não autorizado");
    }
    const result: any = await connection("cookenu_recipes").where({
      id,
    });
    res
      .status(201)
      .send({ 
          id: result[0].id, 
          title: result[0].title, 
          description: result[0].description, 
          user_id: result[0].user_id, 
          createdAt: result[0].date.toLocaleString().slice(0, 10)
        });
        
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};
export default getRecipe;
