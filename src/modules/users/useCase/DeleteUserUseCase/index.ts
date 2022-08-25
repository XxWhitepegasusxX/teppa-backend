import { DeleteUserController } from "./deleteUserController";
import { DeleteUserUseCase } from "./deleteUserUseCase";

const deleteUserUseCase = new DeleteUserUseCase()
export const deleteUserController = new DeleteUserController(deleteUserUseCase)