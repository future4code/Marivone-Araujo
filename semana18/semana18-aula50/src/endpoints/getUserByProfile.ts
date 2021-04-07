import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { user } from "../types";

const getUserByProfile = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const id: user = req.body 
    const token: string = req.headers.authorization!
    const TokenData = getTokenData(token)

    const result = await connection.raw(`
        SELECT name, email FROM to_do_list_users
	    WHERE id = TokenData.id
    `);

    res.send(result[0]);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default getUserByProfile;


