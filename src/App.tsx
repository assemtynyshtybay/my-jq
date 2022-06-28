import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Search } from './components/search-panel/Search';

function App() {
  return (
    <div className="App">
       
       <Navbar />

       <Search />

    </div>
  );
}

export default App;
