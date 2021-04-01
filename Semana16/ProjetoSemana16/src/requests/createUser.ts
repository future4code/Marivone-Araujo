import { Request, Response } from "express";
import connection from "../connections";

const createUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    await connection.raw(
      `INSERT INTO User (id, name, nickname, email)
          VALUES(
          "${req.body.id}",
          "${req.body.name}",
          "${req.body.nickname}",
          "${req.body.email}" 
          )`
    );
    if (
      !req.body.id ||
      !req.body.name ||
      !req.body.nickname ||
      !req.body.email
    ) {
      errorCode = 422;
      throw new Error(`Preencha os campos "id", "nome", "nickname" e "email"`);
    }

    res.status(201).send({ message: "Usuário criado com sucesso!" });
  } catch (error) {
    console.log(error.message);
    res.status(errorCode).send({ message: error.message });
  }
};
export default createUser;
