import React from "react";
import { useSelector } from 'react-redux';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext'
import HomeView from './HomeView';
import { StateType } from "../../types/state.type";
import { DiaryType } from "../../types/diary.type";

export interface PropsType {
  formStatus: boolean;
  calcStatus: boolean;
  userUid: string;
  documents: DiaryType[] | null;
  error: string | null; 
}

export default function Home() {  
  const { user } = useAuthContext();
  const userUid = user.uid;
  const { documents, error } = useCollection('myDiary',["uid", "==", user.uid]);
  const formStatus = useSelector((state: StateType) => state.form)
  const calcStatus = useSelector((state: StateType) => state.calc)

  const props : PropsType= {
    formStatus,
    calcStatus,
    userUid,
    documents,
    error
  }
  
  return (
    <HomeView {...props}/>
  )
}