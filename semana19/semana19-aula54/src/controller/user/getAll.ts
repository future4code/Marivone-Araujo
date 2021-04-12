import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { authenticationData } from "../../model/user";
import { getTokenData } from "../../services/authenticator";

export const getAll = async (
   req: Request,
   res: Response
) => {
   try {

    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);
        
    const result = await connection
    .select('*')
    .from('to_do_list_users')
    .where({token: tokenData})
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
