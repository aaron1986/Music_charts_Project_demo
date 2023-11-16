import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Charts from './assets/components/Charts';
import About from './assets/components/About';
import Playlist from './assets/components/Playlist';
import Music from './assets/components/Music';

import LogoutButton from './assets/components/LogOutButton';
import LoginButton from './assets/components/LoginButton';
import { useAuth0 } from "@auth0/auth0-react";
import AudioComponent from './assets/components/AudioComponent';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [music, setMusic] = useState([]);
  const { isAuthenticated } = useAuth0();
  
  //playlist
  const [playlist, setPlaylist] = useState([]);
  

  // useEffect
  useEffect(() => {
    getMusic();
  }, [music]);

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


        </Routes>

        <AudioComponent />

        {/* FOOTER */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
