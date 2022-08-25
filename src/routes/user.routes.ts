import { Router } from "express";
import { createUserController } from "../modules/users/useCase/CreateUserUseCase";
import { deleteUserController } from "../modules/users/useCase/DeleteUserUseCase";
import { listUsersController } from "../modules/users/useCase/ListUsersUseCase";
import { updateUserController } from '../modules/users/useCase/UpdateUserUseCase';

const usersRoutes = Router()

usersRoutes.post("/", (req, res) => {
    return createUserController.handle(req, res)
})
usersRoutes.get("/", (req, res) => {
    return listUsersController.handle(req, res)
})
usersRoutes.delete("/", (req, res) => {
    return deleteUserController.handle(req, res)
})
usersRoutes.put("/", (req, res) => {
    return updateUserController.handle(req, res)
})


export { usersRoutes }