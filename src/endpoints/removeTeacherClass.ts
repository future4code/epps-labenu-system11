import { Request, Response } from "express"
import connection from "../connection"

export const removeTeacherClass = async (req: Request, res:Response):Promise<void>=>{
    try {
        await connection.raw(`
            UPDATE LS_Teacher
            SET class_id = null
            WHERE id = ${req.params.id};
        `)
        res.status(200).send("Teacher removed from class ")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}