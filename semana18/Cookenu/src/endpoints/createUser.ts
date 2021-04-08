import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator"
import { user } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, password } = req.body

      if (!name || !email || !password ) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','email' e 'password'")
      }

      const [user] = await connection('cookenu_user')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(password);

      const newUser: user = { id, name, email, password: cypherText }

      await connection('cookenu_user')
         .insert(newUser)

      const access_token: string = generateToken({ id })

      res.status(201).send({ access_token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send(error.message)
      } else {
         res.send({ message: error.message })
      }
   }
}