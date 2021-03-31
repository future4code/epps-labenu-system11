import { Request, Response } from "express"
import connection from "../connection"

export const deleteStudentById = async (req: Request, res:Response):Promise<void>=>{
    try {
        await connection.raw(`
            DELETE FROM LS_Student
            WHERE id = ${req.params.studentId};
        `)
        res.status(200).send("Student removed to class ")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}