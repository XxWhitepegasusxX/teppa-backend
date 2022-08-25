import { UpdateUserController } from "./updateUserController";
import { UpdateUserUseCase } from "./updateUserUseCase";

const updateUserUseCase = new UpdateUserUseCase
const updateUserController = new UpdateUserController(updateUserUseCase)

export { updateUserController }