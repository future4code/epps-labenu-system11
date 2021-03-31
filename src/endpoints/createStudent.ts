import { Request, Response } from "express"
import connection from "../connection"

export const createStudent = async (req: Request, res:Response):Promise<void>=>{
    
    try {

        await connection.raw(`
            INSERT INTO LS_Student(name,email,date_birth)
            VALUE (
                "${req.body.name}",
                "${req.body.email}",
                "${req.body.dateBirth}"
            );
        `)
        res.status(200).send("Student Created")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}