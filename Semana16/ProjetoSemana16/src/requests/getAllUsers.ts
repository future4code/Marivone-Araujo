import { Request, Response } from "express";
import connection from "../connections";

const getAllUsers = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const result = await connection.raw(`
    SELECT * FROM User;
    `);

    res.send(result[0]);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default getAllUsers;
