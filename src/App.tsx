import 'bootstrap/dist/css/bootstrap.min.css';
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
