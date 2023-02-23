import { useFirestore } from '../../hooks/useFirestore'
import { useState } from 'react';
import DiaryListView from './DiaryListView';

export default function DiaryList({ diaries }) {
    const { deleteDocument } = useFirestore("myDiary");
    const [isOpen, setIsOpen] = useState(false);

    const props = {
        deleteDocument,
        isOpen,
        setIsOpen,
        diaries
    }
    return (
        <DiaryListView {...props}/>
    )
}