import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"
import { Form } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Playlist({ playlist, setPlaylist }) {
    const [music, setMusic] = useState({});
  
    const params = useParams();
  
    useEffect(() => {
    
      getPlaylist();
    }, []);
  
    async function getMusic() {
      const API = `http://localhost:8080/charts?_id=${params.id}`;
      const res = await axios.get(API);
      setMusic(res.data[0]);
  
      
    }
    
    async function getPlaylist() {
      
    }
  
    return (
      <>
          <h2>Playlist ({playlist.length} songs)</h2>
        {/* <audio controls>
          <source src={music.audio} />
          <img id="music-img" src={music.cover} alt={`Cover for ${music.title}`} />
        </audio>    */}
        {music.title && <Form music={music} setMusic={setMusic} />}
        
        {playlist.map((song) => (

          <div key={song._id}>
            <Link to={`/charts/${song._id}`}>
              <h2 id="album_title"> Album Title:</h2>
              <h2>{song.title}</h2>
              <h2 id="album_title"> Artist:</h2>
              <h2> {song.artist}</h2>
              <div id="chart-img" onClick={() => handleImageClick(music)}>
                <img src={song.cover} alt={`Cover for ${song.title}`} />
              </div>

              <audio controls>
                <source src={song.audioSrc} />
                <img id="music-img" src={song.cover} alt={`Cover for ${song.title}`} />
              </audio>   
            </Link>
              {/* playlist button */}

            {/* <div id="btn-container">
            <button id="space-btn" onClick={() => deleteMusic(song._id)}>Delete Music
            <span className="button_top"> Button
  </span></button>
              </div> */}
            
          </div>
        ))}
      </>
    );
  }
  