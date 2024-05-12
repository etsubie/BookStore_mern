import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBook from "./components/CreateBook/CreateBook";
import Books from "./components/Books/Books";
import Cards from "./components/Cards";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/edit/:id" element={<CreateBook />} />
          <Route path="/cards" element={<Cards/>}/>
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
