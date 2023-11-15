import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Charts from './assets/components/Charts';
import About from './assets/components/About';
import Playlist from './assets/components/Playlist';
import Music from './assets/components/Music';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [music, setMusic] = useState([]);

  //playlist
  //const [playlist, setPlaylist] = useState({ audioSrc: null });
  const [playlist, setPlaylist] = useState([]);
  

  /*

    initialize Playlist = []
    

  */


  // useEffect
  useEffect(() => {
    getMusic();
  }, []);

  async function getMusic() {
    const API = `http://localhost:8080/charts`;
    const res = await axios.get(API);
    setMusic(res.data);
  }

  async function deleteMusic(id) {
    const check = window.confirm('Are you sure?');
    if(check) {
      const API = `http://localhost:8080/charts/${id}`;
      await axios.delete(API);
      getMusic();
    } else {
      alert('That was close!');
    }
  }

  return (
    <>
      <BrowserRouter>
        {/* Header */}
        <Header />

        {/* Charts */}
        <Routes>
          <Route
            path="/charts"
            element={<Charts music={music} playlist={playlist} setPlaylist={setPlaylist} deleteMusic={deleteMusic}/>}
          />
            <Route 
            path="/playlist" 
            element={<Playlist playlist={playlist} setPlaylist={setPlaylist} />} 
            />


          <Route path="/about" element={<About />} />
          <Route path="/charts/:id" element={<Music />} />


        </Routes>

        {/* FOOTER */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
