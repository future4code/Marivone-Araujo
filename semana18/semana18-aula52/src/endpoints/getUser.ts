import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

const getUser = async (req: Request, res: Response) => {
  try {
    
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);
        
    const result = await connection
    .select('id', 'email')
    .from('to_do_list_users')
    .where({id: tokenData?.id})
    res.status(201).send(result);

} catch (error) {
    
    console.log(error.message)
    
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};
export default getUser;



