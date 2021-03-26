import {Request, Response} from "express";
import connection from "../connection";

const getActorByName = async (req: Request, res: Response): Promise<any> => {

  try {   
    const name = req.query.name
    const result = await connection.raw(`
    SELECT name FROM Actor WHERE name = "${name}"
    
`)  
    console.log(req.query.name)
    res.status(200).send(result[0])
 
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Internal server error")         
  } 
}
export default getActorByName

