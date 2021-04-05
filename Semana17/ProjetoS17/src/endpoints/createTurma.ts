import { Request, Response } from "express";
import moment from 'moment'
import connection from "../connection";

enum TIPO_TURMA{
  INTEGRAL = "INTEGRAL",
  NOTURNO = "NOTURNO"
}

type criaTurmaInput = {
  id: number,
  nome: string,
  data_inicio: string,
  data_fim: string,
  module: number,
  tipo: TIPO_TURMA
}

export default async function createTurma(req: Request, res: Response) {

    let errorCode = 400;

    try {

      const input: criaTurmaInput = {
        id: req.body.id,
        nome: req.body.nome,
        data_inicio: req.body.data_inicio,
        data_fim: req.body.data_fim,
        module: 0,
        tipo: req.body.tipo
      } 

      if(!input.id || !input.nome || !input.data_inicio || !input.data_fim || !input.tipo){
        errorCode = 422;
        throw new Error("Preencha os campos corretamente")
      }

      if (input.tipo !== TIPO_TURMA.INTEGRAL && input.tipo !== TIPO_TURMA.NOTURNO){
        errorCode = 422;
        throw new Error ("Os valores possíveis são 'integral' ou 'noturno'.")

      }

      if (input.tipo === TIPO_TURMA.NOTURNO){
          input.nome = input.nome+"-na-night";
      }

      await connection.raw(`
      INSERT INTO TURMA (id, nome, data_inicio, data_fim, module)
      VALUES(
        ${input.id},
        "${input.nome}",
        "${input.data_inicio}",
        "${input.data_fim}",
        ${input.module}
      )
      `)

      res.status(201).send({message:"Turma criada com sucesso"})

    } catch (error) {
      res.status(errorCode).send({message: error.message})      
    }
}
