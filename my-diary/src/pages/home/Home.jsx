import { useSelector } from 'react-redux';
import { useCollection } from '../../hooks/useCollection';
import { useAuthContext } from '../../hooks/useAuthContext'
import HomeView from './HomeView';

export default function Home() {  
  const { user } = useAuthContext();
  const { documents, error } = useCollection('myDiary',["uid", "==", user.uid]);
  const formStatus = useSelector(state => state.form)
  
  const props = {
    formStatus,
    user,
    documents,
    error
  }
  return (
    <HomeView {...props}/>
  )
}