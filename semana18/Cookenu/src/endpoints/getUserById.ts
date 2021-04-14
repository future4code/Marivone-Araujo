import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

const getUserByProfile = async (req: Request, res: Response) => {
  try {

    
    const id = req.params.id
    
    const access_token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(access_token);

    if (!tokenData) {
      res.statusCode = 401;
      throw new Error("Não autorizado");
    }
    const result: any = await connection("cookenu_user").where({
      id,
    });
    res
      .status(200)
      .send({ id: result[0].id, name: result[0].name, email: result[0].email });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};
export default getUserByProfile;
