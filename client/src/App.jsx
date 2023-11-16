import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Charts from './assets/components/Charts';
import About from './assets/components/About';
import Playlist from './assets/components/Playlist';
import Music from './assets/components/Music';


import LogoutButton from './assets/components/LogoutButton';
import LoginButton from './assets/components/LoginButton';
import { useAuth0 } from "@auth0/auth0-react";

import MashupForm from './assets/components/MashupForm';

import AudioComponent from './assets/components/AudioComponent';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [music, setMusic] = useState([]);

  const { isAuthenticated } = useAuth0();

  const [mashup, setMashup] = useState([]);


  //playlist
  const [playlist, setPlaylist] = useState([]);
  

  // useEffect
  useEffect(() => {
    getMusic();
  }, [music]);

  useEffect(() => {
    getMashups();
  }, [mashup]);
  async function getMusic() {
    const API = `https://music-app-2zd6.onrender.com/charts`;
    const res = await axios.get(API);
    setMusic(res.data);
  }

  async function getMashups() {
    const API = `https://music-app-2zd6.onrender.com/mashup`;
    const res = await axios.get(API);
    setMashup(res.data);
  }

  async function deleteMusic(id) {
    const check = window.confirm('Are you sure?');
    if(check) {
      const API = `https://music-app-2zd6.onrender.com/charts/${id}`;
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

        <div id="Authenticated">
      {isAuthenticated ? (
        <LogoutButton />
      ) : (
        <LoginButton />
      )}
    </div>

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
          <Route path="/mashup" element={<MashupForm mashup={mashup}/>} />

        </Routes>

        <AudioComponent />
      </BrowserRouter>

      
        {/* FOOTER */}
        <Footer />
    </>
  );
}

export default App;
