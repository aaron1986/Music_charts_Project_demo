import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"
import Form from './Form';

export default function Music() {
    const [music, setMusic] = useState({});

    const params = useParams();

    useEffect(() => {
        getMusic();
    }, []);

    async function getMusic() {
        const API = `https://music-app-2zd6.onrender.com/charts?_id=${params.id}`;
        const res = await axios.get(API);
        setMusic(res.data[0]);
    }

    return (
        <>
        
            <h2>{music.title}</h2>
            <h2>{music.artist}</h2>
            <div id="music-container">
            <img id="music-img" src={music.cover} />
            <div>
            </div>
            </div> 
            {music.title && <Form music={music} setMusic={setMusic} />}
            </>
        
    )
} {/* end of getBook function */}