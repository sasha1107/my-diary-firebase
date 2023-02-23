import { Timestamp } from "firebase/firestore";

export interface DiaryType {
    id: string;
    text: string;
    uid: string;
    title: string;
    createdTime: Timestamp;
}