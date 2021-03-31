import { Request, Response } from "express"
import connection from "../connection"

export const getTeacherByClassId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await connection("LS_Teacher").where("class_id", id)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}