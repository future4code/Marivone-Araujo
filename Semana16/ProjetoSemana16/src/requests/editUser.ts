import { Request, Response } from "express";
import connection from "../connections";

const editUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    await connection("User")
      .update({
        id: req.body.id,
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
      })
      .where({
        id: req.params.id
      });

    if (
      req.body.id === '' ||
      req.body.name === '' ||
      req.body.nickname === '' ||
      req.body.email === ''
    ) {
      errorCode = 400;
      throw new Error(`Nenhum dos campos pode estar em branco`);
    }

    if(!req.body.name && !req.body.name  && !req.body.nickname  && !req.body.email){
      res.status(400).send({
        message: "Escolha ao menos um valor para alterar"
      })
    }

    res.status(200).send({ message: "Usuário atualizado com sucesso!" });

  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
export default editUser;
