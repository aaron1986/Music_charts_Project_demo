import axios from 'axios'
import { useState, useEffect } from 'react'
import {useParams } from "react-router-dom"
import Form from './Form';

export default function Playlist() {
    const [music, setMusic] = useState({});

    const params = useParams();

    useEffect(() => {
        getMusic();
    }, []);

    async function getMusic() {
        const API = `http://localhost:8080/charts?_id=${params.id}`;
        const res = await axios.get(API);
        setMusic(res.data[0]);
    }

    return (


            <audio controls>
                <source src={music.audio} />
            </audio>
     
    )
} {/* end of getBook function */}