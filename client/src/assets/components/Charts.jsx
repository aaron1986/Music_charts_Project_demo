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

// charts.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AudioComponent from './AudioComponent';

export default function Charts({ music, setMusic, setSelectedAudio, addToPlaylist }) {
  const sortedMusic = [...music].sort((a, b) => a.rank - b.rank);


  const audioUrls = sortedMusic.map((music) => music.audio);

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
              <div id="chart-img">
                <img src={music.cover} alt={`Cover for ${music.title}`} />
              </div>
              <div id="audio-controls">
                <audio controls>
                  <source src={music.audio} />
                </audio>
              </div>
            </Link>
          </div>
        ))}
      </div>
     {/* Add the AudioComponent with the array of audio URLs */}
     <AudioComponent audioUrls={audioUrls} />
    </>
  );
}
