import { Request, Response } from "express"
import connection from "../connection"

export const addStudentClass = async (req: Request, res:Response):Promise<void>=>{
    try {
        await connection.raw(`
            UPDATE LS_Student
            SET class_id = ${req.body.classId}
            WHERE id = ${req.body.studentId};
        `)
        res.status(200).send("Student added to class ")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}