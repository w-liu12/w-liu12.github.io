import React from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import heart from "./assets/img/heart.svg";
import wendy from "./assets/img/about-wendy.png";
import "./assets/css/About.css";
import cloud from "./assets/img/cloud.png";

function About() {
  return (
    <>
      <Header />
      <div className="background">
        <img src={cloud} class="cloud-image" id="back-cloud1"/>
        <img src={cloud} class="cloud-image" id="back-cloud2"/>
        <img src={cloud} class="cloud-image" id="back-cloud3"/>
        <img src={cloud} class="cloud-image" id="back-cloud4"/>
      </div>
      <div className="about-container">
        <div className="about-image-container">
          <img id="about-image" src={wendy} />
          <div className="image-text">
            <div className="image-title">
              <img src={heart} style={{ height: "22px", width: "auto" }} />
              <h3 className="name">Wendy Liu</h3>
            </div>
            <p className="description">
              UC Berkeley: Cognitive Science, Data Science, Design Innovation
            </p>
          </div>
        </div>
        <div className="about-text-container">
          <h2 className="about-title">Nice to Meet You!</h2>
          <p className="about-text">
            I’m a multidisciplinary UX Designer with a background in Product
            Design and Data Science.
          </p>
          <div className="about-text passions">
            <p className="about=text">I’m passionate about:</p>
            <div className="passion-list">
              <p>
                <span>Universal Usability </span>— to create a product my
                friends, Chinese grandparents, and dog can easily navigate and
                appreciate.
              </p>
              <p>
                <span>Simplicity</span> and <span>Coherence</span> — to
                eliminate all poor-design related frustrations in this world. I
                make data-driven design decisions to ensure{" "}
              </p>
            </div>
          </div>
          <p className="about-text">
            You can also talk to me about volleyball 🏐, new foods 🍳, and
            skincare 🧴!
          </p>
        </div>
      </div>
      <div className="skills">
        <div className="skills-container">
          <h2 className="skills-title">My Skillset</h2>
          <div className="skills-list">
            <div className="skills-column">
              <p>UI/UX Design</p>
              <p>Web Design</p>
              <p>Product Design</p>
            </div>
            <div className="skills-column">
              <p>User Flow Mapping</p>
              <p>Web Development</p>
              <p>Prototyping</p>
            </div>
            <div className="skills-column">
              <p>Information Architecture</p>
              <p>User Research</p>
              <p>Design Systems</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
