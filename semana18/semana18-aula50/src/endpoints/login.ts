import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { userPersonalInfo } from "../types";

export default async function login(
  req: Request,
  res: Response
): Promise<void> {
  try {

    const {email, password}: userPersonalInfo = req.body

    if (!email || !password){
        res.statusCode = 422
        throw new Error ("'email' e 'senha' são obrigatórios.")
    }

    if (!email || email.indexOf("@") === -1) {
      res.statusCode = 422
      throw new Error("Email inválido: inclua um @");
    }

    const [user] = await connection("to_do_list_users")
        .where({email})
    
        if (!user || user.password !== password){
            res.statusCode = 401
            throw new Error("Dados inválidos")
        }
    
        const token: string = generateToken({id: user.id})

        // res.send ({token})
        res.send("token gerado pelo jwt")

  } catch (error) {

    if (res.statusCode === 200) {
        res.status(500).send({message: "Internal server error"})
    } else {
        res.send({message: error.message})
    }

  }
}
