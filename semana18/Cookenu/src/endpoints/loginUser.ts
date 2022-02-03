import { compare } from "bcryptjs";
import {Request, Response} from "express";
import connection from "../connection"
import { generateToken } from "../services/authenticator";


export default async function loginUser(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const {email, password} = req.body

        if(!email || !password){
            res.statusCode = 422
            throw new Error ("'Email' e 'senha' são obrigatórios.")
        }
        
        const [user] = await connection("cookenu_user")
            .where({email})

        if(!user){
            res.statusCode = 401
            throw new Error ("Não encontrado")
        }

        const hashCompare = await compare(password, user.password);
        if(!hashCompare){
            res.statusCode = 401;
            throw new Error("Senha Incorreta")
        }


        const access_token: string = generateToken({ id: user.id, role: user.role })
        res.send ({access_token})

    } catch (error) {
        if (res.statusCode === 200) {
            res.status(500).send({message: error.message})
         } else {
            res.send({ message: error.message })
         }
    }
}