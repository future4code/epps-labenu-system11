import { Request, Response } from "express"
import connection from "../connection"

export const getStudentsByHobby = async (req: Request, res:Response):Promise<any>=>{
    try {
        const result = await connection.raw(`
            SELECT LS_Student.name as student, LS_Hobby.name as hobby FROM LS_StudentHobbyRelation
            JOIN LS_Student ON student_id = LS_Student.id
            JOIN LS_Hobby ON hobby_id = LS_Hobby.id
            WHERE hobby_id = ${req.params.id}
        `)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}