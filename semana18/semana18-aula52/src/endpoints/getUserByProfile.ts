import { Request, Response } from "express";
import connection from "../connection";
import { getTokenData } from "../services/authenticator";
import { authenticationData } from "../types";

const getUserByProfile = async (
    req: Request, 
    res: Response) => {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);
    
    if (!tokenData || tokenData.role !== "admin") {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }
    
    const result: any = await connection("to_do_list_users").where({ id: tokenData.id });
    res.status(201).send({ email: result[0].email, password: result[0].password });
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
};
export default getUserByProfile;
