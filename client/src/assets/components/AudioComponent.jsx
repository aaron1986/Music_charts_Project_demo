import React, { useEffect, useRef, useState } from 'react';

const AudioComponent = ({song1Link, song2Link}) => {
  const audioContextRef = useRef(null);
  const source1Ref = useRef(null);
  const gainNode1Ref = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBufferSource, setAudioBufferSource] = useState(null);
  const [volume, setVolume] = useState(1);

  const [song1, setSong1] = useState(song1Link);
  const [song2, setSong2] = useState(song2Link);

  

  // First use effect for initializing audio.
  useEffect(() => {
    
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)
    ();

    
    // console.log("S1 LINK", song1)
    // console.log("S2 LINK", song2)
  });

  // Second use effect 
  useEffect(() => {


    return () => {
      // if (audioContextRef.current && audioContextRef.current.state === 'running') {
      //   audioContextRef.current.close();
      // }
    };
  }, [volume]);


  const updateVolume = async (audio_source) => {

    audio_source.gain.value = volume

  }

  const handleClick = async () => {
    // Check if the AudioContext is in a suspended state and resume it

    // Fetch and decode an audio file

    const response1 = await fetch(`${song1}`);
    const arrayBuffer1 = await response1.arrayBuffer();
    const audioBuffer1 = await audioContextRef.current.decodeAudioData(arrayBuffer1);

    // Fetch and decode the second audio file
    const response2 = await fetch(`${song2}`);
    const arrayBuffer2 = await response2.arrayBuffer();
    const audioBuffer2 = await audioContextRef.current.decodeAudioData(arrayBuffer2);

    // Create BufferSourceNodes and GainNode for each audio file
    const source1 = audioContextRef.current.createBufferSource();
    const gainNode1 = audioContextRef.current.createGain();
    source1.connect(gainNode1);

    gainNode1.gain.value = volume
    gainNode1Ref.current = gainNode1;
    source1Ref.current = source1;


    const source2 = audioContextRef.current.createBufferSource();
    source2.connect(audioContextRef.current.destination);

    // Connect GainNode to the destination (speakers)
    gainNode1.connect(audioContextRef.current.destination);

     

    // Set the initial volume for source1
    gainNode1.gain.value = volume;

    // Set the audio buffers for each source
    source1.buffer = audioBuffer1;
    source2.buffer = audioBuffer2;


    // Start both sources simultaneously
    source1.start();
    source2.start();
};

  const handlePauseResume = async () => {
    
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume().then(function () {
        document.getElementById('pause-resume-btn').textContent = 'Pause';
      });
    } else if (audioContextRef.current.state === 'running') {
      await audioContextRef.current.suspend().then(function () {
        document.getElementById('pause-resume-btn').textContent = 'Resume';
      });
    }

  }

  const handleCrossfade = async () => {

    const interval = setInterval(() => {
      if (gainNode1Ref.current) {
        const currentTime = audioContextRef.current.currentTime;
        gainNode1Ref.current.gain.linearRampToValueAtTime(0, currentTime + 3); // Decrease volume to 0 over 3 seconds
      } else {
        clearInterval(interval);
      }
    }, 1000);

  }

  return (
    <div>
      <button onClick={handleClick}>Play Audio</button>
      <button onClick={handlePauseResume} id="pause-resume-btn">Pause</button>
      <button onClick={handleCrossfade}>Crossfade</button>
    </div>
  );
};

export default AudioComponent;


