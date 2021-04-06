import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData} from "../types";
const getUserByProfile = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const token: string = req.headers.authorization!
    const tokenData: authenticationData | null = getTokenData(token)
    const result = await connection.raw(`
        SELECT name, email FROM to_do_list_users
	    WHERE id = ${tokenData}
    `);
    res.send(result[0]);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default getUserByProfile;


