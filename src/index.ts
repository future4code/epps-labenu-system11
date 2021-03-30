import app from './app'
import { createClass } from './endpoints/createClass'
import { createStudent } from './endpoints/createStudent'
import { createTeacher } from './endpoints/createTeacher'


app.post("/class", createClass)
app.post("/student", createStudent)
app.post("/teacherd", createTeacher)
