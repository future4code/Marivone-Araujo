import { Request, Response } from "express";
import connection from "../connections";

const editUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const result = await connection("User")
      .update({
        id: req.body.id,
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
      })
      .where({
        id: req.params.id,
      });
    if (
      !req.body.id ||
      !req.body.name ||
      !req.body.nickname ||
      !req.body.email
    ) {
      errorCode = 422;
      throw new Error("Please check the fields.");
    }
    res.send(result);
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default editUser;
