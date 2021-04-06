import app from "./app"
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getByEmail from './endpoints/getByEmail'
import editUser from './endpoints/editUser'
import getUserByProfile from './endpoints/getUserByProfile'

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.get('/user/profile', getUserByProfile)

app.get('/user/:email', getByEmail)


