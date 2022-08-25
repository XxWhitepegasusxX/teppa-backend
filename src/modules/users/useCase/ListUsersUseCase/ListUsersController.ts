import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase"

class ListUsersController{
    constructor(private listUserUseCase: ListUsersUseCase){}

    async handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>>{
        const querySnapshot = this.listUserUseCase.execute()
        const users = [];
        (await querySnapshot).forEach((doc) => {
            users.push(doc.data())
        });
        return res.json({users})
    }
}

export { ListUsersController }