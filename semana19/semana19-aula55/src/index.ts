import app from './controller/app'
import userRouter from './routers/userRouter'
import taskRouter from './routers/taskRouter'


app.use('/user', userRouter)
app.use('/task', taskRouter)
