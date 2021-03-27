import app from "./app";
import getAllUsers from "./requests/getAllUsers";
import createUser from "./requests/createUser";
import editUser from "./requests/editUser";
import getUserById from "./requests/getUserById";
// import createTask from "./requests/createTask";

app.get("/user/all", getAllUsers);
app.put("/user", createUser);

// app.put("/task", createTask);

app.post("/user/edit/:id", editUser);
app.get("/user/:id", getUserById);

