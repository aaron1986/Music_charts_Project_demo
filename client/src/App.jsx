import { useState, useEffect } from 'react';
import './App.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Charts from './assets/components/Charts';
import About from './assets/components/About';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [music, setMusic] = useState([]);


  // useEffect
  useEffect(() => {
    getMusic();
  }, []);

  async function getMusic() {
    const API = `http://localhost:8080/charts`;
    const res = await axios.get(API);
    setMusic(res.data);
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
            element={<Charts music={music} setMusics={setMusic}/>}
          />

          
          <Route path="/about" element={<About />} />
        
         
        </Routes>
      
        {/* FOOTER */}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
