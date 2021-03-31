import { Request, Response } from "express"
import connection from "../connection"

export const updateModuleClass = async (req: Request, res:Response):Promise<void>=>{
    try {
        await connection.raw(`
            UPDATE LS_Class
            SET module = ${req.body.module}
            WHERE id = ${req.body.classId};
        `)
        res.status(200).send("Module updated")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}