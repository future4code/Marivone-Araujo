import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData, user } from "../types";

const getUserByProfile = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  const {id, email}: user = req.body
  const token: string = req.headers.authorization!
  const tokenData: authenticationData | null = getTokenData(req.headers.authorization!)

  try {
        const {id, email}: user = await connection.raw(`
        SELECT * FROM to_do_list_users	  
    `);
    res.send({id, email});
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default getUserByProfile;


