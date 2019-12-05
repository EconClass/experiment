import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route path='/PokeTeam/' />
        <Link to='/PokeTeam/'>Redirect</Link>
      </header>
    </div>
  );
}

export default App;
