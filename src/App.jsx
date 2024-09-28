import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import History from './components/History';
import ThreeCard from './components/ThreeCard';
import OneCard from './components/OneCard';
import Explore from './components/Explore';

function App() {
  const getMovie = async (searchTerm) => {
    try {
      // function to get movie term and save to state
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <>
      <History />
      <Explore />


    </>
  )
}

export default App
