import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      // if (!name || !nickname || !email || !password) {
      //    res.statusCode = 422
      //    throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      // }

      if (!email || email.indexOf("@") === -1 || email === "") {
         res.statusCode = 422
         throw new Error("Email inválido: preencha o campo indicado ou inclua um @");
       }
   
       if (!password || password.length < 6) {
         res.statusCode = 422
         throw new Error("Senha inválida");
       }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId()

      const cypherText = await hash(password)
      const newUser: user = { id, name, nickname, email, password:cypherText }

      await connection('to_do_list_users')
         .insert(newUser)

      const token: string = generateToken({id})

      res.status(201).send({ token })
      // res.status(201).send("Token gerado por jwt")

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}