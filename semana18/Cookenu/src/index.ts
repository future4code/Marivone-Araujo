import app from "./app"
import createUser from './endpoints/createUser'
import getUserById from "./endpoints/getUserById"
import getUserByProfile from "./endpoints/getUserByProfile"
import loginUser from './endpoints/loginUser'
import postRecipe from "./endpoints/postRecipe"

app.post('/signup', createUser)
app.post('/login', loginUser)
app.post('/recipe', postRecipe)

app.get('/user/profile', getUserByProfile)
app.get('/user/:id', getUserById)
