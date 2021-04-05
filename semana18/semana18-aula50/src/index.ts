import app from "./app"
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getByEmail from './endpoints/getByEmail'
import getUserByProfile from './endpoints/getUserByProfile'

app.post('/user/signup', createUser)
app.post('/user/login', login)

app.get('/user/:id', getUserByProfile)

app.get('/user/:email', getByEmail)


