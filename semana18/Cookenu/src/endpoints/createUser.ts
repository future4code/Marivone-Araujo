import { Request, Response } from "express";
import connection from "../connection";
import { generateToken } from "../services/authenticator";
import generateId from "../services/idGenerator"
import { user, userRole } from "../types";
import { hash } from "../services/hashManager";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, email, password, role } = req.body

      if (!name || !email || !password || !role) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','email', 'password' e 'role'")
      }

      if (password.length < 6){
         res.statusCode = 422;
         throw new Error("A senha deve conter, no mínimo, 6 dígitos");
      }

      if (role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== !userRole.NORMAL){
         res.statusCode = 422
         throw new Error("Os valores possíveis para 'role' são NORMAL e ADMIN");
      }

      const [user] = await connection('cookenu_user')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = generateId();

      const cypherText = await hash(password);

      const newUser: user = { id, name, email, password: cypherText, role }

      await connection('cookenu_user')
         .insert(newUser)

      const access_token: string = generateToken({ id, role })

      res.status(201).send({ access_token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send(error.message)
      } else {
         res.send({ message: error.message })
      }
   }
}