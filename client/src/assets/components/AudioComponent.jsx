// AudioComponent.js
import React, { useEffect, useRef } from 'react';

const AudioComponent = ({ audioUrls }) => {
  const audioContextRef = useRef(null);

  useEffect(() => {
    // Create an AudioContext when the component mounts
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

    // Clean up the audio context when the component unmounts
    return () => {
      if (audioContextRef.current && audioContextRef.current.state === 'running') {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handleClick = async () => {
    // Check if the AudioContext is in a suspended state and resume it
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    // Fetch and decode each audio file
    for (const audioUrl of audioUrls) {
      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);

      // Create a BufferSourceNode for each audio file
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBuffer;

      // Connect the source to the destination (speakers)
      source.connect(audioContextRef.current.destination);

      // Start playing the audio
      source.start();
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Play Audio</button>
    </div>
  );
};

export default AudioComponent;
