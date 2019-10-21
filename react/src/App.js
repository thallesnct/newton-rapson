import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  )
}

export default App;