import { Request, Response } from "express";
import { signupBusiness } from "../../business/user/signupBusiness";
import { signupInput } from "../../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, nickname, email, password, role } = req.body as signupInput;
    const token = await signupBusiness({
      name,
      nickname,
      email,
      password,
      role,
    });

    res.status(201).send({
      message: "Usuário criado!",
      token,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
