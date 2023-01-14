import { useState } from 'react';
import './App.css';
import data from './data';
import Reviews from './Component/Reviews';
function App() {
  
  return (
    <>
      <main className="container">
        <Reviews/>
      </main>
    </>
  );
}

export default App;
