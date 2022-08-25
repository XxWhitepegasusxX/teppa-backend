import { db } from './../../services/firebase';
import { collection, DocumentData, getDocs, QuerySnapshot } from "firebase/firestore";

class ListUsersUseCase {
    async execute(): Promise<QuerySnapshot<DocumentData>>{
        const querySnapshot = await getDocs(collection(db, "users"));
        return querySnapshot
    }

}
export { ListUsersUseCase }