import { Request, Response } from "express"
import connection from "../connection"

export const removeStudentClass = async (req: Request, res:Response):Promise<void>=>{
    try {
        await connection.raw(`
            UPDATE LS_Student
            SET class_id = null
            WHERE id = ${req.params.id};
        `)
        res.status(200).send("Student removed from class ")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}