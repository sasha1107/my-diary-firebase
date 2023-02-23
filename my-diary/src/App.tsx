import React from "react";
import { useAuthContext } from './hooks/useAuthContext';
import { Provider } from 'react-redux';
import { GlobalStyle } from './app.style';
import { store } from './redux/store';
import Loading from './pages/etc/Loading';
import Router from './routes/Router';

function App() {

  const { isAuthReady, user } = useAuthContext();
  // console.log(isAuthReady) => true/false

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