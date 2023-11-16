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
                <div className="login-box">
                    <div className="user-box">
                    <input name="title" placeholder="title" onChange={handleChange} value={formData.title} />
                    <input name="artist" placeholder="artist" onChange={handleChange} value={formData.artist} />
           <input name="cover" placeholder="cover" onChange={handleChange} value={formData.cover} />
           <input name="audio" placeholder="audio" onChange={handleChange} value={formData.audio} />
           <input name="weeksOnChart" placeholder="weeksOnChart" onChange={handleChange} value={formData.weeksOnChart} />
           <div className="btn-container">
           <button className="button-17">Add Music</button>
           </div>
                    </div> {/* user-box */}
                </div> {/* login-box */}
       </form>
        
       
    );


}//end of export default function