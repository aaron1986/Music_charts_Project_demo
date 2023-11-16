import { useState, useEffect } from "react";
import axios from 'axios'

import AudioComponent from "./AudioComponent";

export default function MashupForm({mashup}) {


    const [formData, setFormData] = useState(
         mashup ?? {
          song1Link: "",
          song1Start: 0,
          song1End: 0,
          crossFadePoint: 0,
          crossFadeDuration: 0,
          song2Link: "",
          song2Start: 0,
          song2End: 0,
        }
    );

    async function addMashup(event) {
      event.preventDefault();
      const API = "http://localhost:8080/mashup";
      const res = await axios.post(API, formData);
      if (res) {
        console.log("MASHUP FORM SUCCESSFULLY SUBMITTED")
      }
  }

    function handleFileChange(event) {
      setFormData({ ...formData, [event.target.name]: `./src/assets/music/${event.target.files[0].name}`});
      console.log(formData);
    }

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value});
        console.log(formData);
    }

  return (
    <>
    <form className="" onSubmit={addMashup}>
      <div className="login-box">
                    <div className="user-box">
                    <label for="song1Link">Song 1</label>
                    <input type="file" name="song1Link" accept="audio/*" onChange={handleFileChange}></input>
                    <label for="song2Link">Song 2</label>
                    <input type="file" name="song2Link" accept="audio/*" onChange={handleFileChange}></input>
                    <input name="song1Start" placeholder="Song 1 Start" onChange={handleChange} value={formData.song1Start} />
                    <input name="song1End" placeholder="Song 1 End" onChange={handleChange} value={formData.song1End} />
                    <input name="crossFadePoint" placeholder="crossFadePoint" onChange={handleChange} value={formData.crossFadePoint} />
                    <input name="crossFadeDuration" placeholder="crossFadeDuration" onChange={handleChange} value={formData.crossFadeDuration} />
                    {/* <input name="song2Start" placeholder="weeksOnChart" onChange={handleChange} value={formData.song2Link} /> */}
                    <input name="song2Start" placeholder="Song 2 Start" onChange={handleChange} value={formData.song2Start} />
                    <input name="song2End" placeholder="Song 2 End" onChange={handleChange} value={formData.song2End} />
                    <div className="btn-container">
                    <button className="button-17">Add Mashup</button>
                    </div>
                    </div> {/* user-box */}
      </div>
    </form>


    <div>
      {mashup.map((song) => (
            <div key={song._id}>
              {song.song1Link != "" && (
                <>
                  <p>{song.song1Link}</p>
                  <AudioComponent song1Link={song.song1Link} song2Link={song.song2Link} />
                </>
              )}
            </div>
      ))}

    </div>
    </>
  )

}