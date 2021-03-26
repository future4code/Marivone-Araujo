import {Request, Response} from "express";
import connection from "../connection";

const getActorById = async (req: Request, res: Response): Promise<any> => {
  try {   
    const id = req.params.id
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)  
    res.status(200).send(result[0]) 
  } catch (error) {    
    console.log(error.message)
    res.status(500).send("Internal server error")     
  }
  }
  export default getActorById
