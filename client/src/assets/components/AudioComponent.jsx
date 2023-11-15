import React, { useEffect, useRef, useState } from 'react';

const AudioComponent = () => {
  const audioContextRef = useRef(null);
  const source1Ref = useRef(null);
  const gainNode1Ref = useRef(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioBufferSource, setAudioBufferSource] = useState(null);
  const [volume, setVolume] = useState(1);

  


  // First use effect for initializing audio.
  useEffect(() => {
    
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

  });

  // Second use effect 
  useEffect(() => {

    console.log("ACR CURRENT 1147", audioContextRef.current)

    // const audio = audioContextRef.current;

    // const gainNode = audio.createGain();

    // gainNode.gain.value = volume;

    // audio.volume = volume;

    // console.log('VOLUME' , volume)

    // Clean up the audio context when the component unmounts
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
    const response1 = await fetch('./src/assets/music/nicovinz_amiwrong.mp3');
    const arrayBuffer1 = await response1.arrayBuffer();
    const audioBuffer1 = await audioContextRef.current.decodeAudioData(arrayBuffer1);

    // Fetch and decode the second audio file
    const response2 = await fetch('./src/assets/music/bonjovi_itsmylife.mp3');
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


// import { useEffect, useRef } from 'react';

// const AudioComponent = () => {
  
//   let audioContext;
//   let bufferLoader;

//   const audioContextRef = useRef(null);

  
//   const handleClick = () => {

//     if (audioContextRef.current) {


//         audioContextRef.current.resume().then(() => {

//         });
//     }

//   }

//   useEffect(() => {

//     const init = async () => {
//       const audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();

//       bufferLoader = new BufferLoader(
//         audioContext, ['./src/assets/music/chainsmokers_thisfeeling.mp3', '.src/assets/music/kygo_stargazing.mp3'],
//         finishedLoading
//       );

//       bufferLoader.load();
//     }

//     const finishedLoading = async (bufferList) => {

//       // create two sources and play them together

//       var source1 = audioContext.createBufferSource();
//       var source2 = audioContext.createBufferSource();
//       source1.buffer = bufferList[0];
//       source2.buffer = bufferList[1];

//       source1.connect(audioContext.destination);
//       source2.connect(audioContext.destination);
//       source1.start(0);
//       source2.start(0);



//     }

//     init()

//     return () => {
//       if (audioContext && audioContext.state === 'running') {
//         audioContext.close();
//       }
//     };
//   }, []);


//   return <button onClick={handleClick}>Start Audio</button>;
  

// }

// export default AudioComponent;