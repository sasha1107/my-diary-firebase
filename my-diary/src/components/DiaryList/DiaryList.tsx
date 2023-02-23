import React from 'react';
import { useFirestore } from '../../hooks/useFirestore'
import { useState } from 'react';
import DiaryListView from './DiaryListView';
import { DiaryType } from '../../types/diary.type';

export interface PropsType {
    deleteDocument: (id: string) => void; 
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    diaries: DiaryType[];
}

export default function DiaryList({ diaries } : { diaries: DiaryType[] }) {
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