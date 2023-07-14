import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board';
import React from 'react'
function App() {
  return (
    <div className="App">
      <Header />
      <Player whichPlayer = "X" score = "100"/>
      <Player whichPlayer = "O" score = "50"/>
      <Board />
      <Board

    </div>
  );
  
}

export default App;
