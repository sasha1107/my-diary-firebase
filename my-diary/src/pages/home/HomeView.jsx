import React from 'react'
import IconArea from './IconArea/IconArea';
import DiaryForm from '../../components/DiaryForm/DiaryForm'
import DiaryList from '../../components/DiaryList/DiaryList';
import styles from './Home.module.css'

export default function HomeView({
    formStatus,
    user,
    documents,
    error
}) {
    return (
        <>
            <IconArea />
            <main className={styles.cont}>
                <aside>
                {formStatus ? <DiaryForm uid={user.uid}/> : <></>}
                </aside>
                <ul className={styles.content_list}>
                {error && <strong>{error}</strong>}
                {documents && <DiaryList diaries={documents} />}
                </ul>
            </main>
        </>
    )
}