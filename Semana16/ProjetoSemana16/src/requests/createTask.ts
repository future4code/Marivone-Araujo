import { Request, Response } from "express";
import connection from "../connections";
import moment from "moment"

const createTask = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  
  const deadline = moment(req.body.deadline, 'DD/MM/YYYY').format('YYYY-MM-DD')
  
  try {    
    await connection.raw(
   
      `INSERT INTO todolist_task (id, title, description, deadline, author_id)
          VALUES(
          "${req.body.id}",
          "${req.body.title}",
          "${req.body.description}",
          "${deadline}",
          "${req.body.author_id}" 
          )`
          
    );
    if (
      !req.body.id || 
      !req.body.title ||
      !req.body.description ||
      !req.body.deadline ||
      !req.body.author_id
    ) {

      errorCode = 422;
      throw new Error("Todos os campos são obrigatórios");
    }

    const dateDiff: number = moment(req.body.deadline, 'DD/MM/YYYY').unix() - moment().unix()

    if (dateDiff <= 0)
    {
      errorCode = 422;
      throw new Error("Deadline deve ser uma data futura");
    }

    res.status(201).send({ message: "Task criada com sucesso!" });
    
  } catch (error) {
    console.log(error.message);
    res.status(errorCode).send({ message: error.message });
  }
};
export default createTask;

