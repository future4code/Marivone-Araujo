import  connection from "../data/connection";
import { taskDTO } from "../model/task";

export const insertTask = async (
   task: taskDTO
) => {
   await connection('to_do_list_tasks')
      .insert({
         id: task.id,
         title: task.title,
         description: task.description,
         deadline: task.deadline,
         author_id: task.authorId
      })
}