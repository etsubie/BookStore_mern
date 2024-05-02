import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateBook from './components/CreateBook/CreateBook';
import Books from './components/Books/Books';

function App() {

  return (
    <div className="App">
     <CreateBook/>
     <Books/>
    </div>
  );
}

export default App;
