import app from './app'
import connection from './connection'
import { addStudentClass } from './endpoints/addStudentClass'
import { addTeacherClass } from './endpoints/addTeacherClass'
import { createClass } from './endpoints/createClass'
import { createStudent } from './endpoints/createStudent'
import { createTeacher } from './endpoints/createTeacher'
import { deleteStudentById } from './endpoints/deleteStudentById'
import { getAgeStudentById } from './endpoints/getAgeStudentById'
import { getStudentsByClassId } from './endpoints/getStudentsByClassId'
import { getStudentsByHobby } from './endpoints/getStudentsByHobby'
import { getTeacherByClassId } from './endpoints/getTeacherByClassId'
import { removeStudentClass } from './endpoints/removeStudentClass'
import { removeTeacherClass } from './endpoints/removeTeacherClass'
import { updateModuleClass } from './endpoints/updateModuleClass'


// para executar os inserts basta descomentar o insert no app.ts
export const inserts = async ()=>{
    try {
        await connection.raw(`
            INSERT INTO LS_Student(name,email,date_birth)
            VALUE ("Diego","diego1@gmail.com", "1991-07-04"),
            ("Rodrigo","rodrigo1@gmail.com", "1989-04-16");
            
            INSERT INTO LS_Teacher(name,email,date_birth)
            VALUE ("João","joao@gmail.com", "1992-07-04"),
            ("leticia","leticia@gmail.com", "1995-04-16");
            
            INSERT INTO LS_Class(name,date_start,date_stop)
            VALUE ("drummond","2020-01-01", "2020-06-01"),
            ("epps","2020-12-01", "2021-06-01");
        `)
    } catch (error) {
        console.log(error)
    }
}

app.get("/teacher/class/:id", getTeacherByClassId)
app.get("/student/class/:id", getStudentsByClassId)
app.get("/student/hobby/:id", getStudentsByHobby)
app.get("/student/:id", getAgeStudentById)
app.put("/student/:id", removeStudentClass)
app.put("/teacher/:id", removeTeacherClass)
app.put("/student", addStudentClass)
app.put("/class", updateModuleClass)
app.put("/teacher", addTeacherClass)
app.post("/class", createClass)
app.post("/student", createStudent)
app.post("/teacher", createTeacher)
app.delete("/student/:id", deleteStudentById)
