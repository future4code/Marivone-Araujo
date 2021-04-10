import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, editRecipe } from "../types";

export default async function editRecipe(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const id = req.params.id
      const { title, description }: editRecipe = req.body
      const token: string = req.headers.authorization!
      const tokenData: authenticationData | null = getTokenData(token)

      if(!tokenData){
         res.statusCode = 401
         throw new Error("Não autorizado a editar esta receita")
      }
      
       if (!title && !description) {
         res.statusCode = 422
         throw new Error("Informe o(s) novo(s) 'title' ou 'description'")
      }
      await connection('cookenu_recipes')
         .update({ title, description })
         .where({ id })

         res.status(201).send("Receita editada com sucesso")

   } catch (error) {
      if (res.statusCode === 200) {
         res.status(500).end({message: error.message})
      }
      res.send({message: error.message})
   }
}