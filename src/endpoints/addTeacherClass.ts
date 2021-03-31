import { Request, Response } from "express"
import connection from "../connection"

export const addTeacherClass = async (req: Request, res:Response):Promise<void>=>{
    try {
        await connection.raw(`
            UPDATE LS_Teacher
            SET class_id = ${req.body.classId}
            WHERE id = ${req.body.teacherId};
        `)
        res.status(200).send("Teacher added to class ")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}