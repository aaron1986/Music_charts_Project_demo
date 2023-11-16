import React from "react";
import { Link } from "react-router-dom";

import video from "../animation.mp4";
import paddy from "../paddy.jpg";

export default function About() {
  return (
    <>
      {/* muted */}
      <div className="container">
        <video className="videoTag" autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="about-heading"></div> {/* end of about-heading */}
        <div className="aaron-text">
          <img className="soup-image2" src=""></img>
          <p className="aaron">
            My love affair with designing started when I was a child using
            Deluxe Paint on the Amiga, I tried to design ‘Andy Warhol’ coke cans
            and the Guns N’ Roses band logo, while also making small animations.
            I started to write HTML and CSS code from books I borrowed from the
            local library, additionally, I was given the advice to learn to code
            instead of using Macromedia Dreamweaver and Adobe software to design
            my webpages. Moreover, this led me to start training in the PHP
            language at Zend (I completed both level one and two), I also
            started to learn front-end web development with the Coursera
            company.
          </p>{" "}
          {/* end of aaron */}
        </div>{" "}
        {/* end aaron-text */}
        <div className="about-section">
          <p className="about-text">
            So, picture this: I'm this total coding newbie, right? Never touched
            the stuff before. But then, I decide to take the plunge into the
            coding world. Along the way, I meet these cool people – tech
            wizards, problem-solving champs – you name it.
            <br />
            Their stories about coding adventures, both direct and indirect,
            really got me hooked. Suddenly, I'm deciphering algorithms and
            dancing through the binary maze. It's a wild ride.
            <br />
            Being around fellow learners feels like finding my tribe. Even
            though I'm taking it slow, I've come to realize it's my own pace of
            soaking up this coding thing.
            <br />
            Inspired by the tales of others who've walked this path, I find my
            rhythm in learning. Armed with determination, I'm crafting my own
            code story, adding lines and creating a digital masterpiece, one
            step at a time.
          </p>{" "}
          {/* end of about-text */}
          <img className="soup-image" src={paddy}></img>
        </div>{" "}
        {/* end of about-section */}
      </div>{" "}
      {/* end of container div */}
    </>
  );
}
