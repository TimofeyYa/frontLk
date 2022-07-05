import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/mainPage';
import SignPage from './pages/signPage';
import ContactsPage from './pages/contactsPage';
import isAuth from "./functions/isAuth";

import './css/reset.css';
import './css/style.css';


function App() {
  React.useEffect( ()=>{
    isAuth();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cabinet/*" element={<MainPage />}/>
        <Route path="login" element={<SignPage />} />
        <Route path='*' element={<SignPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
