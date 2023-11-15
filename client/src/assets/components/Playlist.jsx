import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"
import { Form } from 'react-router-dom';

export default function Playlist({ setPlaylist }) {
    const [music, setMusic] = useState({});
  
    const params = useParams();
  
    useEffect(() => {
      getMusic();
    }, []);
  
    async function getMusic() {
      const API = `http://localhost:8080/charts?_id=${params.id}`;
      const res = await axios.get(API);
      setMusic(res.data[0]);
  
      //playlist 
      setPlaylist({ audioSrc: res.data[0].audio, title: res.data[0].title, artist: res.data[0].artist });
    }
  
    return (
      <>
        <audio controls>
          <source src={music.audio} />
          <img id="music-img" src={music.cover} alt={`Cover for ${music.title}`} />
        </audio>   
        {music.title && <Form music={music} setMusic={setMusic} />}
      </>
    );
  }
  