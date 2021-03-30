import { Request, Response } from "express";
import connection from "../connection";


export const createClass = async (req: Request, res:Response):Promise<void>=>{
    try {
        await connection.raw(`
            INSERT INTO LS_Class(name,date_start,date_stop,module)
            VALUE (
                "${req.body.name}",
                "${req.body.dateStart}",
                "${req.body.dateStop}",
                "${req.body.module}"
            );
        `)
        res.status(200).send("Created")
    } catch (error) {
        res.status(500).send("Internal server error")
    }
}