import app from "./app"
// import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getByEmail from './endpoints/getByEmail'
import getUserByProfile from './endpoints/getUserByProfile'

app.post('/user/signup', createUser)
app.post('/user/login', login)

app.get('/user/:email', getByEmail)
app.get('/user/profile', getUserByProfile)




// app.put('/user/edit/:id', editUser)