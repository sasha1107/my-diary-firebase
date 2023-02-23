import { onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        let q;
        if (myQuery) {
            // 전개구문을 이용해 where("uid", "==", "user.uid") 을 작성하게 합니다.
            q = query(collection(appFireStore, transaction), where(...myQuery), orderBy("createdTime", "desc"));
            // 오름차순은 ASC
        }
    
        const unsubscribe = onSnapshot((myQuery ? q : collection(appFireStore, transaction)),
            (snapshot) => {
                let result = [];
                snapshot.docs.forEach((doc) => {
                    // console.log(doc.data());
                    result.push({ ...doc.data(), id: doc.id });
                })
                setDocuments(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            })

        return unsubscribe
    }, [collection])

    return { documents, error }
}   