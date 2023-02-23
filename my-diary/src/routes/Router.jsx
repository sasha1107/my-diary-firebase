import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import Nav from '../components/Navbar/Nav'
import Home from '../pages/home/Home'
import Login from '../pages/account/Login/Login'
import Signup from '../pages/account/Signup/Signup'
import Off from '../pages/etc/Off'
import Footer from '../components/Footer/Footer'
export default function Router() {
    const { isAuthReady, user } = useAuthContext();

    return (
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
    )
}
