import React, { useState, useCallback } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/authorization/signIn';
import SignUp from './components/authorization/signUp';
import { Navbar } from './components/Navbar/Navbar';
import { MainPage } from './components/pages/MainPage';
import { Auth } from './context/Auth';

function App() {
  const [token, setToken] = useState<string | null>(null);

  const login = useCallback((token: string) => {
    setToken(token);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
  }, []);
  return (
    <Auth.Provider
      value={{
        token: token,
        isLoggedIn: !!token,
        login: login, //  **** TS2322 Error at this line ****
        logout: logout,
      }}>
      <BrowserRouter>
        <Navbar token={token} />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Auth.Provider>
  );
}

export default App;
