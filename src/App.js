import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CardFilling from './components/CardFilling';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Header />} />
          <Route path='/cardfilling' element={<CardFilling />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
