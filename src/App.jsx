import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import { ToastContainer } from 'react-toastify';
import Navigationbar from './Components/Navigationbar';
import ForgetPassword from './Pages/ForgetPassword';
import ResetPassword from './Pages/ResetPassword';

const App = () => {
  const [token,setToken]=useState('')
  return (
    <div>
      <BrowserRouter>
    <Navigationbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login setToken={setToken} />} />
        <Route path='/home' element={<LandingPage token={token}/>} />
        <Route path='/forget-password' element={<ForgetPassword />} />
        <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
      </Routes>
      </BrowserRouter>
     
    </div>
  );
};

export default App;