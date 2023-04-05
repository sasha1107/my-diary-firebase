import React from 'react'
import IconArea from './IconArea/IconArea';
import DiaryForm from '../../components/DiaryForm/DiaryForm'
import DiaryList from '../../components/DiaryList/DiaryList';
import styles from './Home.module.css'
import { PropsType } from './Home';
import Calculator from '../../components/Calculator/Calculator';
import Visitor from '../visitors/Visitor';

export default function HomeView({
    formStatus,
    calcStatus,
    visitorStatus,
    userUid,
    documents,
    error
}: PropsType) {
    return (
        <>
            <IconArea />
            <main className={styles.cont}>
                <aside>
                {formStatus ? <DiaryForm uid={userUid}/> : <></>}
                </aside>
                {calcStatus && <Calculator/>}
                {visitorStatus && <Visitor/>}
                <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {documents && <DiaryList diaries={documents} />}
                </ul>
            </main>
        </>
    )
}
