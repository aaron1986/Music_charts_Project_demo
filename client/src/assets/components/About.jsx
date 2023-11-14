import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
     <div className='container'>
        <div className='about-heading'>
            <div className='about-section'>
                <p className='about-text'>
                Placeholder Paddy
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Alias sapiente odit nisi totam in nesciunt, vitae accusamus excepturi, ducimus, 
                 dolorum quae consequatur hic libero soluta sit voluptates doloribus quam minus.


                </p> {/* end of about-text */}
                <img className="soup-image" src=""></img> 
            </div> {/* end of about-section */}
        </div> {/* end of about-heading */}

      
        <div className='aaron-text'>
        <img className="soup-image2" src=""></img> 
            <p className='aaron'>
            My love affair with designing started 
                         when I was a child using Deluxe Paint on the Amiga, 
                        I tried to design ‘Andy Warhol’ coke cans and the Guns N’ Roses 
                        band logo, while also making small animations. 
                        I started to write HTML and CSS code from books I borrowed from 
                        the local library, additionally, I was given the advice to learn to code
                        instead of using Macromedia Dreamweaver and Adobe software to design my webpages. 
                        Moreover, this led me to start training in the PHP language at Zend (I completed both level one and two), 
                        I also started to learn front-end web development with the Coursera company. 
            </p> {/* end of aaron */}
        </div> {/* end aaron-text */}
     </div> {/* end of container div */}
        </>
       
    );
}