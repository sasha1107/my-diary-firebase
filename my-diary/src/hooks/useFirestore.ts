import { appFireStore, timeStamp } from "../firebase/firebaseConfig"
import { addDoc, collection, deleteDoc, doc, DocumentReference,
    CollectionReference, } from "firebase/firestore"
import { useReducer } from "react"


interface State {
    document: DocumentReference | null;
    isPending: boolean;
    error: string | null;
    success: boolean;
}

interface  Action{
    type: string;
    payload? : any;
}
const initState: State = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

const storeReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null, error: null, success: false }
        case 'addDoc':
            return { isPending: false, document: action.payload as DocumentReference, error: null, success: true }
        case 'error':
            return { isPending: false, document: null, error: action.payload, success: false }
        case 'deleteDoc':
            return { isPending: false, document: null, success: true, error: null }
        default:
            return state
    }
}

export const useFirestore = (transaction: string) => {
    const [response, dispatch] = useReducer(storeReducer, initState);

    const colRef: CollectionReference = collection(appFireStore, transaction);

    const addDocument = async (doc: Record<string, any>) => {
        dispatch({ type: "isPending" });
        try {
            const createdTime = timeStamp.fromDate(new Date());
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            dispatch({ type: "addDoc", payload: docRef });
        } catch (e: any) {
            dispatch({ type: "error", payload: e.message });
        }

    }

    // 컬렉션에서 문서를 제거합니다.
    const deleteDocument = async (id: string) => {

        dispatch({ type: "isPending" });
        try {
            const docRef = await deleteDoc(doc(colRef, id));
            dispatch({ type: 'deleteDoc', payload: docRef });
        } catch (e: any) {
            dispatch({ type: 'error', payload: e.message });
        }
    }

    return { addDocument, deleteDocument, response }
}