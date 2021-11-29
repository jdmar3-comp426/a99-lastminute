import './App.css';
import React from 'react'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>lastminute final project</h1>
        <p>Sam, Lingling, Jackson, Hyunmo, Eric</p>
        <p>test</p>
        <Link to='/users'>Users</Link>
      </header>
    </div>
  );
}

export default App;
