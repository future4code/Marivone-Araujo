import app from "./app";
import { signup } from "./controller/user/signup";
import { createTask } from "./controller/task/createTask";
import { getTaskById } from "./controller/task/getTaskById";
import { login } from "./controller/user/login";
import { getAll } from "./controller/user/getAll";
import deleteUser from "../src/controller/user/deleteUser"


app.post("/user/signup", signup);
app.post("/user/login", login);
app.put("/task", createTask);
app.get ("/user/all", getAll)
app.get("/task/:id", getTaskById);
app.delete("/:id", deleteUser)


app.listen(3306, () => {
  console.log("Servidor rodando na porta 3306");
});
