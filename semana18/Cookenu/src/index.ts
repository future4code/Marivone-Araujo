import app from "./app"
import createUser from './endpoints/createUser'
import getUserById from "./endpoints/getUserById"
import getUserByProfile from "./endpoints/getUserByProfile"
import getRecipe from "./endpoints/getRecipe"
import loginUser from './endpoints/loginUser'
import postRecipe from "./endpoints/postRecipe"
import resetPassword from "./endpoints/resetPassord"
import editRecipe from "./endpoints/editRecipe"
import deleteRecipe from "./endpoints/deleteRecipe"

app.post('/signup', createUser)
app.post('/login', loginUser)
app.post('/recipe', postRecipe)
app.post ('/user/password/reset', resetPassword)

app.get('/user/profile', getUserByProfile)

app.post ('/user/edit/recipe/:id', editRecipe)
app.get('/recipe/:id', getRecipe)
app.get('/user/:id', getUserById)
app.delete('/recipe/:id', deleteRecipe)
