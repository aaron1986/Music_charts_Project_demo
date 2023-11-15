import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
     <div className='container'>
        <div className='about-heading'>
            <div className='about-section'>
                <p className='about-text'>
                    My main aim was to display music charts on a website by integrating an API. My goal was to present the 
                    album cover, album rank, and artist/album title alongside the charts. Initially, I utilized the 'Billboard Chart' API from Rapid API, 
                    but the data quality was pretty bad. Moreover, I decided to generate my own data and charts for a more reliable presentation.
                
                </p> {/* end of about-text */}
                <img className="soup-image" src="./src/assets/cats.jpg"></img> 
            </div> {/* end of about-section */}
        </div> {/* end of about-heading */}
        
      
        <div className='aaron-text'>
        <img className="soup-image2" src=""></img> 
            <p className='aaron'>
            
            </p> {/* end of aaron */}
        </div> {/* end aaron-text */}
     </div> {/* end of container div */}
        </>
       
    );
}