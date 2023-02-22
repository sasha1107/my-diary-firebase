import { useAuthContext } from './hooks/useAuthContext';
import { GlobalStyle } from './app.style';
import Loading from './pages/etc/Loading';
import Router from './routes/Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state, action){
  if (action.type === 'toggleForm'){
    return {
      ...state, form: !state.form
    }
  }
  else if (action.type === 'toggleInfo'){
    return {
      ...state, info: !state.info
    }
  }
  else if (action.type === 'toggleExit'){
    return {
      ...state, exit: !state.exit
    }
  }
  else if (action.type === 'countDiary'){
    return {
      ...state, diaryList: state.count
    }
  }
  return state;
}
const initialState = {
  form: true,
  info: false,
  exit: false,
  diaryList: 0,
}
const store = createStore(reducer, initialState)

function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      <GlobalStyle />
      <Provider store={store}>
        {isAuthReady ? (
          <Router />
        ) : <Loading/>}
      </Provider>
    </div >
  );
}

export default App