import styles from './Home.module.css'
import DiaryForm from './DiaryForm'
import DiaryList from './DiaryList';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection';
import FormContext from '../../context/FormContext';
import { useContext } from 'react';
import IconArea from './IconArea';

export default function Home() {  
  const { user } = useAuthContext();
  const { documents, error } = useCollection('myDiary',["uid", "==", user.uid]);
  const { status } = useContext(FormContext);

  return (
    <>

      <IconArea />
      <main className={styles.cont}>
        <aside>
          {status === "display" ? <DiaryForm uid={user.uid}/> : <></>}
        </aside>
        <ul className={styles.content_list}>
        {error && <strong>{error}</strong>}
        {documents && <DiaryList diaries={documents} />}
        </ul>
      </main>
    </>
  )
}