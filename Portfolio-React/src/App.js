import React from 'react';
import  ReactDOM  from 'react-dom';
import './App.css';
import './index.css';
import Home from './Routes/Home';
import About from './Routes/About';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import{ Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/Project" element ={<Project/>}/>
      <Route path="/About" element ={<About/>}/>
      <Route path="/Contact" element ={<Contact/>}/>
    </Routes>
   </div>
  );
}

export default App;
