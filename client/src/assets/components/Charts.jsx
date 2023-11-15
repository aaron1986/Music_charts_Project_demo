// Charts.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default function Charts({ music, setMusic, deleteMusic, setPlaylist }) {
  const sortedMusic = [...music].sort((a, b) => a.rank - b.rank);

  const handleImageClick = (music) => {
    const { audio, title, artist } = music;

    const audioElement = new Audio(audio);
    audioElement.play();
  };


  //Playlist Information:
  const handleAddToPlaylist = (music) => {
    const { audio, title, artist } = music;
    // setPlaylist({ audioSrc: audio, title, artist });
    setPlaylist([...playlist], [{audioSrc: audio, title, artist}])
  };

  return (
    <>
      <div>
        {sortedMusic.map((music) => (
          <div key={music._id}>
            <Link to={`/charts/${music._id}`}>
              <h2> Rank: {music.rank}</h2>
              <h2 id="album_title"> Album Title:</h2>
              <h2>{music.title}</h2>
              <h2 id="album_title">Artist:</h2>
              <h2> {music.artist}</h2>
              <div id="chart-img" onClick={() => handleImageClick(music)}>
                <img src={music.cover} alt={`Cover for ${music.title}`} />
              </div>

              {/* playlist button */}
              <button onClick={() => handleAddToPlaylist(music)}>
                Add to Playlist
              </button>

              
            </Link>
            <div id="btn-container">
            <button id="space-btn" onClick={() => deleteMusic(music._id)}>Delete Music
            <span className="button_top"> Button
  </span></button>
              </div>
            
          </div>
        ))}
        <Form />
      </div>
    </>
  );
}
