import { useAuthContext } from './hooks/useAuthContext';
import { GlobalStyle } from './app.style';
import { FormProvider } from './context/FormContext';
import { InfoProvider } from './context/InfoContext';
import Loading from './pages/etc/Loading';
import Router from './routes/Router';

function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      <GlobalStyle />
      <FormProvider>
      <InfoProvider>
        {isAuthReady ? (
          <Router />
        ) : <Loading/>}
      </InfoProvider>
      </FormProvider>
    </div >
  );
}

export default App