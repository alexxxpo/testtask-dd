import React from 'react';
import CardList from './components/CardList';
import { ICardApp } from './models';

import 'bootstrap/dist/css/bootstrap.min.css';

const list: ICardApp[] = [
  {
    id: 1,
    title: 'Карточка 1',
    content: 'lorem jknn jlnasl nasd n adjn',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: 2,
    title: 'Карточка 2',
    content: 'lorem jknn jlnasl nasd n adjn',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: 3,
    title: 'Карточка 3',
    content: 'lorem jknn jlnasl nasd n adjn',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: 4,
    title: 'Карточка 4',
    content: 'lorem jknn jlnasl nasd n adjn',
    createdAt: new Date(),
    editedAt: new Date()
  },
  {
    id: 5,
    title: 'Карточка 5',
    content: 'lorem jknn jlnasl nasd n adjn',
    createdAt: new Date(),
    editedAt: new Date()
  },
]


function App() {
  return (
    <div className="d-flex justify-content-center">
      <CardList cardList={list || []} />
    </div>
  );
}

export default App;
