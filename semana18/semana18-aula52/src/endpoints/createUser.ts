import { Request, Response } from "express";
import connection from "../connection";
import { generateToken, getTokenData } from "../services/authenticator";
import getAddressInfo from "../services/getAddressInfo";
import { hash } from "../services/hashManager";
import generateId from "../services/idGenerator";
import { addressInfo, user, userRole } from "../types";
export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password, role, cep, number, adicional_Info } = req.body;
    if (!name || !nickname || !email || !password || !role || !cep || !number || !adicional_Info) {
      res.statusCode = 422;
      throw new Error(
        "Preencha os campos 'name','nickname', 'password', 'email', 'role', 'cep', 'number', 'adicional_Info'"
      );
    }
    if (role !== userRole.admin && role !== userRole.normal) {
      throw new Error(
        "Os valores possíveis para 'role' são 'normal' e 'admin'"
      );
    }
    if (!email || email.indexOf("@") === -1 || email === "") {
      res.statusCode = 422;
      throw new Error(
        "Insira valores válidos: o email é obrigatório e precisa conter @"
      );
    }
    if (!password || password.length < 6) {
      res.statusCode = 422;
      throw new Error("Senha inválida");
    }
    const [user] = await connection("to_do_list_users").where({ email });
    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }
   const id: string = generateId();
   const cypherText = await hash(password);
   const newUser: user = {id,name,nickname,email,password: cypherText,role,cep,number,adicional_Info};
      await connection("to_do_list_users").insert(newUser);
   const {street,neighbourhood,city,state}: any | null = await getAddressInfo(cep);
  
   const users_id: string = generateId();
   const userAddress = {cep,street,number,adicional_Info,neighbourhood,city,state,user_id: users_id};
      await connection("to_do_list_users_address").insert(userAddress);
      res.status(200).send("Endereço cadastrado com sucesso.");
   const token: string = generateToken({ id, role });
      res.status(201).send({ token });
    // res.status(201).send("Token gerado por jwt")
  } catch (error) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}
