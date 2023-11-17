import React from "react";
import { Link } from "react-router-dom";

import video from "../animation.mp4";
import paddy from "../paddy.jpg";
import cats from "../cats.jpg";

export default function About() {
  return (
    <>
      {/* muted */}
      <video className="videoTag" autoPlay loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="container">
        <div className="about-heading"></div> {/* end of about-heading */}
        <div className="aaron-text">
          <img className="soup-image2" src={cats}></img>
          <p className="aaron">
            My main aim was to display music charts on a website by integrating
            an API. My goal was to present the album cover, album rank, and
            artist/album title alongside the charts. Initially, I utilized the
            'Billboard Chart' API from Rapid API, but the data quality was
            pretty bad. Moreover, I decided to generate my own data and charts
            for a more reliable presentation.
          </p>{" "}
          {/* end of aaron */}
        </div>{" "}
        {/* end aaron-text */}
        <div className="about-section add-margin">
          <p className="about-text add-smaller-margin">
            Demie is a passionate programmer who embraced the coding world at a
            young age. Challenges serve as Demie's playground, and conquering
            them brings a genuine smile to their face. Programming is not just a
            skill for Demie but a source of joy and perpetual discovery. Every
            line of code represents a step in Demie's journey toward mastery.
            Driven by dedication and curiosity, Demie progresses, finding
            fulfillment in the dynamic world of problem-solving. The love for
            programming goes beyond a hobby for Demie; it's a compelling force
            shaping their learning and professional endeavors.
          </p>{" "}
          {/* end of about-text */}
        </div>{" "}
        <div className="about-section add-margin">
          <img className="soup-image" src={paddy}></img>
          <p className="about-text add-smaller-margin">
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
        </div>{" "}
        {/* end of about-section */}
      </div>{" "}
      {/* end of container div */}
    </>
  );
}
