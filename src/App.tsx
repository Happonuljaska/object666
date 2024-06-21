import React from 'react';
import './App.css';
import { AuthorizationPage } from './components/_general/AuthorizationPage/AuthorizationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<AuthorizationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
