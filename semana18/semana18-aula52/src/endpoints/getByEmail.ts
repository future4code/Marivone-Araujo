import { Request, Response } from "express";
import connection from "../connection";

const getUserByEmail = async (req: Request, res: Response) => {
  let errorCode: number = 400;

  try {
    const email = req.params.email;
    const result = await connection.raw(`
      SELECT * FROM to_do_list_users
	    WHERE email = "${email}"
    `);

    res.send(result[0]);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default getUserByEmail;


