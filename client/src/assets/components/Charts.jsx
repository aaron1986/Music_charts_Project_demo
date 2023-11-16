// Charts.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

import '../.././Chart.css';

export default function Charts({ music, setMusic, deleteMusic, playlist, setPlaylist }) {
  const sortedMusic = [...music].sort((a, b) => a.rank - b.rank);

  const handleImageClick = (music) => {
    const { audio, title, artist } = music;

    const audioElement = new Audio(audio);
    
    console.log("AUDIO", audio)
    audioElement.play();
  };


  //Playlist Information:
  const handleAddToPlaylist = (music) => {
    const { _id, audio, title, artist, cover } = music;

    // setPlaylist({ audioSrc: audio, title, artist });
    setPlaylist([...playlist, {_id, audioSrc: audio, title, artist, cover}])
  };

  return (
    <>
      <h2>Music Charts and Form</h2>
      <Form />
      <div className='chart-table'>
        {sortedMusic.map((music) => (
          <div className='chart-element' key={music._id}>
              <h2 className='chart-rank'>{music.rank}</h2>


              <Link to={`/charts/${music._id}`}>
              <div id="chart-img" onClick={() => handleImageClick(music)}>
                <img src={music.cover} alt={`Cover for ${music.title}`} />
              </div>
              </Link>

              <div className='chart-descriptor'>
                {/* <h2 id="album_title"> Album Title:</h2> */}
                <h2>{music.title}</h2>
                {/* <h2 id="album_title">Artist:</h2> */}
                <h2> {music.artist}</h2>
              </div>
            <div id="btn-container">

            <button className="space-btn" onClick={() => handleAddToPlaylist(music)}>
            Add to Playlist
            </button>

            <button className="space-btn" onClick={() => deleteMusic(music._id)}>Delete Music
            <span className="button_top"> Button
  </span></button>
              </div>
            
          </div>
        ))}

      </div>
    </>
  );
}
