import "../css/Footer.css";
import wendyWhite from "../img/wendy-white.svg";
import React from "react";
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';
import resume from '../img/resume.svg';
import { forwardRef } from "react";


const Footer = forwardRef((props, ref) => {
  return (
    <footer ref={ref} id="footer">
        <div className="footer-left">
          <a id="footer-logo" href="./index.html">
            <img src={wendyWhite} style={{height: '30px', width: 'auto'}} />
          </a>
          <p id="footer-creator">Powered By: Wendy Liu</p>
        </div>
        <div className="footer-middle">
          <a
            href="https://github.com/w-liu12"
            alt="github"
            title="github"
            target="_blank"
          >
            <img className="footer-button" src={github} />
          </a>
          <a
            href="http://www.linkedin.com/in/wendy--liu"
            alt="linkedin"
            title="linkedin"
            target="_blank"
          >
            <img className="footer-button" src={linkedin} 
            />
          </a>
          <a
            href="https://www.figma.com/proto/AurGrmZy8NN7bz7RCkyfh1/Kai-Wen-Liu-Resume?page-id=0%3A1&node-id=1-2&viewport=61%2C189%2C0.6&t=MCcXrqaQFdZAQqOg-1&scaling=min-zoom&content-scaling=fixed"
            alt="resume"
            title="resume"
            target="_blank"
          >
            <img className="footer-button" src={resume} 
            />
          </a>
        </div>
        <div className="footer-right">
          <p id="footer-contact">Contact me:</p>
          <a id="footer-email" href="mailto: wendy_liu@berkeley.edu">
            wendy_liu@berkeley.edu
          </a>
        </div>
        </footer>
  );
});

export default Footer;
