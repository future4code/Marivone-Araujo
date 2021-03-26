import app from "./app";
import getAllUsers from "./requests/getAllUsers";
import createUser from "./requests/createUser";
import editUser from "./requests/editUser";
import getUserById from "./requests/getUserById";

app.get("/user/all", getAllUsers);
app.put("/user", createUser);

app.get("/user/:id", getUserById);

app.post("/user/edit/:id", editUser);
