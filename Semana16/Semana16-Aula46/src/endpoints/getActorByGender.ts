import { Request, Response } from "express";
import connection from "../connection";

const getActorByGender = async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
    `);

    res.status(200).send(result[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
};
export default getActorByGender;
