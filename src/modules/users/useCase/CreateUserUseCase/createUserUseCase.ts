import { db } from './../../services/firebase';
import { doc, setDoc, Timestamp } from "firebase/firestore";
import {v4 as uuidV4} from 'uuid'
interface IRequest {
    username: string,
    password: string,
    email: string,
    id: string,
}

class CreateUserUseCase {
    async execute({username, password, email, id}: IRequest): Promise<void>{

        await setDoc(doc(db, "users", id), {
            username: username,
            password: password,
            email: email,
            created_at: Timestamp.fromDate(new Date()),
            id: id,
          });
    }

}
export { CreateUserUseCase }