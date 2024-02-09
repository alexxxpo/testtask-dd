import React, { useEffect, useState } from 'react';
import CardList from './components/CardList';
import { ICardApp } from './models';

import 'bootstrap/dist/css/bootstrap.min.css';
import AddCard from './components/AddCard';
import useLocalStorage from './hooks/useLocalStorage';




function App() {

  const [cardList] = useLocalStorage([], 'cardList');

  console.log(cardList);


  return (
    <div className="d-flex justify-content-center">
      <CardList cardList={cardList || []} />
      <AddCard />
    </div>
  );
}

export default App;
