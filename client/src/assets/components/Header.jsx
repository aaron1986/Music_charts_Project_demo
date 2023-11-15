import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
        <header>
      <nav>
        <ul>
        <li><a href="/">Home</a></li>
        <li><Link to="/charts">Charts</Link></li>
        <li><Link to="/playlist">Playlist</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <div className='container'>
      <h1>TuneMasher</h1>
      <div>

      </div>
      
      
      </div> {/* end of container div */}

        </header>
        </>
       
    );
}