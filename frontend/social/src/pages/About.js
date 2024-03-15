import React from 'react';
import { Link } from 'react-router-dom';

import "./about.css";
import video1378145861 from "./video1378145861.mp4";

function About() {
  return (
    <>
      <div>
        <h2 id="co">The below video shows the explanation and working of the website</h2>
        <div>
          <video width="640" height="360" controls>
            <source src={video1378145861} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default About;