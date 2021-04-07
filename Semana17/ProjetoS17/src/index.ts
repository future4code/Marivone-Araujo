import app from "./app"
// import getAllStudents from "./endpoints/getAllStudents"
// import getAllTeachers from "./endpoints/getAllTeachers"
import createTurma from "./endpoints/createTurma"
import createEstudante from "./endpoints/createEstudante"

app.post ("/turma", createTurma)

app.post ("/estudante", createEstudante)

// app.get("/students", getAllStudents)
// app.get("/teachers", getAllTeachers)

// app.put ("/create/teacher", createTeacher)
