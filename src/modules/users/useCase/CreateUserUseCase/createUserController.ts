import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";
import {v4 as uuidV4} from 'uuid'


class CreateUserController{
    constructor(private createUserUseCase: CreateUserUseCase){}

    handle(req: Request, res: Response): Response{
        const { username, password, email } = req.body
        const id = uuidV4()
        this.createUserUseCase.execute({username, password, email, id})
        
        return res.status(201).send()
    }
}

export { CreateUserController }