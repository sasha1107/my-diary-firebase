import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Nav from './components/Nav';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home'
import Login from './pages/account/Login'
import Signup from './pages/account/Signup'
import { GlobalStyle } from './app.style';
import Footer from './components/Footer';
import { FormProvider } from './context/FormContext';
import Loading from './pages/etc/Loading';

function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      <GlobalStyle/>
      <FormProvider>
      {isAuthReady ? (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate replace={true} to="/login"></Navigate>}></Route>
            <Route path='/login' element={!user ? <Login /> : <Navigate replace={true} to="/"></Navigate>}></Route>
            <Route path='/signup' element={!user ? <Signup /> : <Navigate replace={true} to="/"></Navigate>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      ) : <Loading/>}
      </FormProvider>
    </div >
  );
}

export default App