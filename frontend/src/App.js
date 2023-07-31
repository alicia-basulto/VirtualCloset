import React from 'react';
import MenuBar from './components/MenuBar';
import Gallery from './components/Gallery';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Button />
      <Gallery />
    </div>
  );
}

export default App;