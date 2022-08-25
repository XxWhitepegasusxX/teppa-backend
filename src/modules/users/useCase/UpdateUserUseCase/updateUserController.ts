import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";

class UpdateUserController{
    constructor(private updateUserUseCase: UpdateUserUseCase){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id, update } = req.body
        await this.updateUserUseCase.execute({id, update})
        return res.status(200).send()
    }
}
export { UpdateUserController }