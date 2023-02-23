import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';
import IconArea from './IconArea';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Home() {  
  const { user } = useAuthContext();
  const { documents, error } = useCollection('myDiary',["uid", "==", user.uid]);
  const formStatus = useSelector(state => state.form)
  const dispatch = useDispatch();
  const [diaryCount, setDiaryCount] = useState();
  
  // useEffect(() => {
  //   setDiaryCount(documents.length)
  //   dispatch({type: "countDiary", count: diaryCount})
  // }, [documents]) 
  
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