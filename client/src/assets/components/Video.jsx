import React from 'react';
import { Link } from 'react-router-dom';

export default function Video() {
    return (
        <>
         <div className="video-container">
         <video id="background-video" >
      <source src='./src/assets/components/Videolights_-_8675 (720p).mp4' type="video/mp4"/>
     </video>
        </div> 
        </>
       
    );
}