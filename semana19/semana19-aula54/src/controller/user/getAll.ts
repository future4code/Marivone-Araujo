import { Request, Response } from "express";
import { connection } from "../../data/connection";

export const getAll = async (
   req: Request,
   res: Response
) => {
   try {

    const token: string = req.headers.authorization!;
        if(!token){
            throw new Error('Você precisa estar logado para acessar essa informação')
        }
    const result = await connection
    .select('id', 'name', 'email', 'password', 'role')
    .from('to_do_list_users')
      res.status(201).send(result);

} catch (error) {
    
    console.log(error.message)
    
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};
