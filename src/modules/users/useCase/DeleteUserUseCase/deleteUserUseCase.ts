import { doc, deleteDoc } from "firebase/firestore";
import { db } from './../../services/firebase';

class DeleteUserUseCase{
    async execute(id: string): Promise<void>{
        await deleteDoc(doc(db, "users", id));
    }
}
export { DeleteUserUseCase }