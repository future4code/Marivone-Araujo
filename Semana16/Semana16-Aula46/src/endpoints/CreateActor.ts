import {Request, Response} from "express";
import connection from "../connection";

const createActor = async (req: Request, res: Response) => {
    try {
  
      await connection.raw(
          `INSERT INTO Actor (id, name, gender, birth_date, salary)
          VALUES(
          "${Date.now()}",
          "${req.body.name}",
          "${req.body.gender}",
          "${req.body.birthDate}",
          ${req.body.salary}    
          )`
      )
  
      res.status(201).send("Created!")
  
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
  }
  
  export default createActor