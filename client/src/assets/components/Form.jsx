import { useState } from "react";
import axios from 'axios'

export default function Form({musicCharts, setMusicCharts, music, setMusic }) {
    const [formData, setFormData] = useState(
        music ?? {
            rank: "",
            title: "",
            artist: "", 
            cover: "",  
            audio: "", 
            weeksOnChart: "",
        }
    );

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value});
    }

    async function addMusic(event) {
        event.preventDefault();
        const API = "http://localhost:8080/charts";
        const res = await axios.post(API, formData);
        setMusicCharts([...musicCharts, res.data]);
    }

    async function updateMusic(event) {
        event.preventDefault();
        const API = `http://localhost:8080/charts`;
        await axios.put(API, formData);
        setMusicCharts(formData);
    }

    return (
        <form onSubmit={music?.rank ? updateMusic : addMusic}>
            <input name="rank" placeholder="rank" onChange={handleChange} value={formData.rank} />
            <input name="title" placeholder="title" onChange={handleChange} value={formData.title} />
            <input name="artist" placeholder="artist" onChange={handleChange} value={formData.artist} />
            <input name="cover" placeholder="cover" onChange={handleChange} value={formData.cover} />
            <input name="audio" placeholder="audio" onChange={handleChange} value={formData.audio} />
            <input name="weeksOnChart" placeholder="weeksOnChart" onChange={handleChange} value={formData.weeksOnChart} />
            
            <button className="btn-form">Add Music</button>
        </form>
    );


}//end of export default function