import app from "./app";
import CreateActor from "./endpoints/CreateActor"
import getActorByGender from "./endpoints/getActorByGender";
import getActorById from "./endpoints/getActorById";
import getActorByName from "./endpoints/getActorByName";
import GetAllActors from "./endpoints/GetAllActors";
import UpdateActor from "./endpoints/UpdateActor"

app.post("/actor", CreateActor)

app.get("/actor", GetAllActors)

app.get("/actor/gender", getActorByGender)

app.get("/actor/search", getActorByName)

app.put("/actor/:id", UpdateActor)

app.get("/actor/:id", getActorById)

