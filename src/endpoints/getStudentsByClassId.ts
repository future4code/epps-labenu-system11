import { Request, Response } from "express"
import connection from "../connection"

export const getStudentsByClassId = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = await connection("LS_Student").where("class_id", id)

        res.status(200).send(result[0])
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}