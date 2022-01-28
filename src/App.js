
import './App.css';
import { useState, useEffect } from 'react';
import {Route, Routes, useParams} from 'react-router-dom';
import Layout from './views/Layout';
import Houses from './views/Houses';
import House from './views/House';
import Container from './Components/Container/Container';
import Home from './views/Home';
import Char from './views/Char'
function App() {
  
  // let params = useParams();
  // console.log(params);
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/houses/:currentHouse" element={<House />} />
          <Route path="/houses/house/:charName" element={<Char />} />
        </Route>
      </Routes>
    </Container>
    
  );
}

export default App;
