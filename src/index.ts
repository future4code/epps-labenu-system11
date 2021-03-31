import app from './app'
import { addStudentClass } from './endpoints/addStudentClass'
import { addTeacherClass } from './endpoints/addTeacherClass'
import { createClass } from './endpoints/createClass'
import { createStudent } from './endpoints/createStudent'
import { createTeacher } from './endpoints/createTeacher'
import { getAgeStudentById } from './endpoints/getAgeStudentById'
import { getStudentsByClassId } from './endpoints/getStudentsByClassId'
import { getTeacherByClassId } from './endpoints/getTeacherByClassId'


app.get("/teacher/class/:id", getTeacherByClassId)
app.get("/student/class/:id", getStudentsByClassId)
app.get("/student/:id", getAgeStudentById)
app.put("/student", addStudentClass)
app.put("/teacher", addTeacherClass)
app.post("/class", createClass)
app.post("/student", createStudent)
app.post("/teacher", createTeacher)
