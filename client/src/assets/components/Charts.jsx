/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Charts() {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    const fetchCharts = async () => {
      const charts_api = `http://localhost:8080/charts`;
      try {
        const res = await axios.get(charts_api);
        const chartEntries = res.data.chart.entries.map(entry => ({
          rank: entry.rank,
          title: entry.title,
          cover: entry.cover,
        }));
        setCharts(chartEntries);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchCharts();
  }, []); 

  return (
    <>
      <div>
        <h1>Charts</h1>
        {charts.map(entry => (
          <div key={entry.rank}>
            <p>Album Rank: {entry.rank}</p>
            <p>Album Title: {entry.title}</p>
            <img src={entry.cover} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Charts; */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default function Charts({ music, setMusic }) {
  const sortedMusic = [...music].sort((a, b) => a.rank - b.rank);
  const [musicCharts, setMusicCharts] = useState([]);

  const handleImageClick = (audioSrc) => {
    const audio = new Audio(audioSrc);
    audio.play();
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
              <div id="chart-img" onClick={() => handleImageClick(music.audio)}>
                <img src={music.cover} alt={`Cover for ${music.title}`} />
              </div>
            </Link>
          </div>
        ))}
         <Form musicCharts={musicCharts} setMusicCharts={setMusicCharts} />
      </div>
    </>
  );
}
