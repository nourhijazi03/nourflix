
import React from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./Scenes/Home";
import Movies from "./Scenes/Movies";
import Shows from "./Scenes/Shows";
import Details from "./Scenes/Details";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>  
      <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/movies" Component={Movies}/>
        <Route path="/shows" Component={Shows}/>
        <Route path="/details" Component={Details}/>
      </Routes>
      </Router>    
    </div>
  );
}

export default App;
