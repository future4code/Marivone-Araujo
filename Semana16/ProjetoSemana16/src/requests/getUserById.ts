import { Request, Response } from "express";
import connection from "../connections";

const getUserById = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  
  try {
    const id = req.params.id;
    const result = await connection.raw(`
    SELECT id, nickname FROM User
	  WHERE id = ${id}
    `);
    
    res.send(result[0]);

  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default getUserById;
