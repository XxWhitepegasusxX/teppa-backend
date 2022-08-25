import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";


const listUsersUseCase = new ListUsersUseCase()
export const listUsersController = new ListUsersController(listUsersUseCase)