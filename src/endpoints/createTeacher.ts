import { Request, Response } from "express"
import connection from "../connection"

export const createTeacher = async (req: Request, res:Response):Promise<void>=>{
    
    try {

        await connection.raw(`
            INSERT INTO LS_Teacher(name,email,date_birth)
            VALUE (
                "${req.body.name}",
                "${req.body.email}",
                "${req.body.dateBirth}"
            );
        `)
        res.status(200).send("Teacher Created")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}