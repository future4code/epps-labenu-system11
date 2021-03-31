import { Request, Response } from "express";
import connection from "../connection";
import {calcAge} from "./functions/calcAge"


export const getAgeStudentById = async (req: Request, res: Response):Promise<any> => {
    try {
        const id = req.params.id
        const dateBirth = await connection("LS_Student").select("date_birth").where("id", id)
        let aux : string = dateBirth[0].date_birth
        const age = calcAge(aux)

        res.status(200).send({age:age})
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
}