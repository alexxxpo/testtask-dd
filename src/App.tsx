import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import { ICardApp } from './models';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddCard from './components/AddCard';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddPage from './pages/AddPage';
import EditPage from './pages/EditPage';




function App() {




  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/add' element={<AddPage />} />
        <Route path='/edit' element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
