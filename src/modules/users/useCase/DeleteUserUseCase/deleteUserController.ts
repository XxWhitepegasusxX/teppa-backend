import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";

class DeleteUserController{
    constructor(private deleteUserUseCase: DeleteUserUseCase){}

    handle(req: Request, res: Response): Response{
        const { id } = req.body
        this.deleteUserUseCase.execute(id)
        return res.status(200).send()
    }
}
export { DeleteUserController }