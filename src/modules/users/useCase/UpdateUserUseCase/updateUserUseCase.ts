import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase"

interface IRequest{
    id: string,
    update: {
        username?: string,
        email?: string,
        password?: string,
    }
}

class UpdateUserUseCase{
    async execute({id, update}: IRequest): Promise<void>{
        const newDoc = doc(db, "users", id);
        await updateDoc(newDoc, {
            username: update.username,
            email: update.email,
            password: update.password,
          })
    }
}
export { UpdateUserUseCase }