import {Request, Response} from "express";
import connection from "../connection";


const getAllActors = async (
    req: Request, 
    res: Response): Promise<void> =>{

    try {
        // const result = await connection.raw(`
        //     SELECT * FROM Actor; 
        // `
// )
        // res.send(result[0])

        const actors = await connection ("Actor")
        res.send(actors)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
         
    }
}

export default getAllActors
