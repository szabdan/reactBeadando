import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import { Routes, Route } from "react-router";
//import AuthContext from './store/auth-context';
//import { useContext } from 'react';
import PizzaPage from './pages/PizzaPage';
import HomePage from './pages/HomePage';
import BorokPage from './pages/BorokPage';
import KoktelokPage from './pages/KoktelokPage';
import React from 'react';

import './App.css';

//const PizzaPage = React.lazy(()=>import('./pages/PizzaPage'));

function App() {
  //const ctx = useContext(AuthContext);
  //const loggedIn = ctx.isLoggedIn;

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/pizza' element={<PizzaPage />}/>
        <Route path='/borok' element={<BorokPage />}/>
        <Route path='/koktelok' element={<KoktelokPage />}/>
        <Route path='*' element={<HomePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
