import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/authorization/signIn';
import SignUp from './components/authorization/signUp';
import { Navbar } from './components/Navbar/Navbar';
import { MainPage } from './components/pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
