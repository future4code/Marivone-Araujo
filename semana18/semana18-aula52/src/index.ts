import app from "./app"
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import getByEmail from './endpoints/getByEmail'
import editUser from './endpoints/editUser'
import getUser from './endpoints/getUser'
import getUserByProfile from './endpoints/getUserByProfile'
import resetPassord from './endpoints/resetPassord'
import deleteUser from './endpoints/deleteUser'
// import getAddressInfo from "./services/getAddressInfo"

app.get('/user', getUser)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.get('/user/profile', getUserByProfile)
app.post('/user/password/reset', resetPassord)
// getAddressInfo("05424150").then(console.log)

app.delete('/user/:id', deleteUser)
app.get('/user/:email', getByEmail)


