import './App.css';

import React from 'react';
import { Routes, Route } from "react-router-dom"

import Registration from '../components/Registration/Registration';
import Games from '../components/Games/Games';
import Home from '../components/Home/Home';

function App() {

  return (
    <div className="App">
      <main className="App-main">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="registration" element={ <Registration/> } />
        <Route path="games" element={ <Games/> } />
      </Routes>        
     </main>
    </div>
  );
}

export default App;
