import { Request, Response } from "express";
import taskBusiness from '../../business/task/taskBusiness'

export const createTask = async (
   req: Request,
   res: Response
) => {
   try {

      const { title, description, deadline, authorId } = req.body

      await taskBusiness({ title, description, deadline, authorId })

      res.status(201).end()

   } catch (error) {

      res.statusMessage = error.message
      res.status(500).end()
   }
}

