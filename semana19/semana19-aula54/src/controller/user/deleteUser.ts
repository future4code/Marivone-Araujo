import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { getTokenData } from "../../services/authenticator";
import { authenticationData } from "../../model/user";

export default async function deleteUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const token: string = req.headers.authorization!;
    const tokenData: authenticationData | null = getTokenData(token);

    if (!tokenData || tokenData.role !== "admin") {
      res.statusCode = 401;
      throw new Error("Unauthorized");
    }

    const id = req.params.id;
    await connection("to_do_list_users").delete().where({ id });

    res.status(201).send("Usuário deletado com sucesso");
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.status(res.statusCode).send({ message: error.message });
    }
  }
}
