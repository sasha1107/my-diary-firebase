import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Nav from './components/Nav';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home'
import Login from './pages/account/Login'
import Signup from './pages/account/Signup'
import { GlobalStyle } from './app.style';
import Footer from './components/Footer';
import { FormProvider } from './context/FormContext';
import { InfoProvider } from './context/InfoContext';
import Loading from './pages/etc/Loading';
import Off from './pages/etc/Off';

function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      <GlobalStyle/>
      <FormProvider>
      <InfoProvider>
      {isAuthReady ? (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate replace={true} to="/login"></Navigate>}></Route>
            <Route path='/login' element={!user ? <Login /> : <Navigate replace={true} to="/"></Navigate>}></Route>
            <Route path='/signup' element={!user ? <Signup /> : <Navigate replace={true} to="/"></Navigate>}></Route>
            <Route path='/off' element={<Off/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      ) : <Loading/>}
      </InfoProvider>
      </FormProvider>
    </div >
  );
}

export default App