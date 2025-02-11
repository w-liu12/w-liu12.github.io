import React from "react";
import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/Footer.jsx";
import Project from "./assets/components/Project.jsx";
import "./assets/css/Home.css";
import arrow from "./assets/img/arrow.svg";
import sodoi from "./assets/img/sodoi.png";
import wonderbottle from "./assets/img/wonder-bottle.png";
import wonderreprint from "./assets/img/wonder-reprint.png";
import xroads from "./assets/img/xroads.png";
import nom from "./assets/img/nom.png";
import mobius from "./assets/img/mobius.png";
import cloud from "./assets/img/cloud.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Home() {
  // const ref = useRef();
  return (
    <>
      <Parallax pages={4.2}>
        <ParallaxLayer offset={0} speed={0.5} className="landing-page">
          <Header />
          <div className="landing-text">
            <h1 id="landing-intro">Hello, I'm Wendy Liu!</h1>
            <p>
              A data-driven designer who makes your experience{" "}
              <em>beautiful, simple, and effortless</em>.
            </p>
          </div>
          <div className="landing-scroll">
            <p id="scroll-text">My Projects</p>
            <img
              src={arrow}
              id="scroll-arrow"
              style={{ width: "30px", height: "auto" }}
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.73} className="cloud">
          <div className="cloud-container cloud1">
            <img src={cloud} className="cloud-image" id="cloud1"/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4} className="cloud">
          <div className="cloud-container cloud2">
            <img src={cloud} className="cloud-image" id="cloud2"/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2} className="cloud">
          <div className="cloud-container cloud3">
            <img src={cloud} className="cloud-image" id="cloud3"/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.6} className="cloud">
          <div className="cloud-container cloud4">
            <img src={cloud} className="cloud-image" id="cloud4"/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3} className="cloud">
          <div className="cloud-container cloud5">
            <img src={cloud} className="cloud-image" id="cloud5"/>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          factor={2.8}
          speed={0.05}
          className="projects-container"
          id="projects"
          style={{ top: "0" }}
        >
          <Project
            image={mobius}
            company="Möbius"
            title="Product Development"
            description="Designed and prototyped an SAT prep B2B SAAS startup with a team of 6."
            skills="UI/UX Design | Product Design | Prototyping"
            link="https://www.figma.com/slides/vKKqbCyIpC9SP1sOLR6LCa/12%2F12%2F24-M%C3%B6bius-Slide-Deck?node-id=2071-193&t=9ESeQMQrnfuEBifO-1"
            className="purple"
          />
          <Project
            image={nom}
            company="Nomado"
            title="Website Redesign"
            description="Developed a website following a rebrand to cater towards a new customer base."
            skills="UI/UX Design | Web Development | Internship"
            link="https://pine-canid-a47.notion.site/Nomado-Website-Redesign-18a8814b18e580cba0acdf1f4ede345c?pvs=4"
            className="green"
          />
          <Project
            image={wonderbottle}
            company="Wonderfil"
            title="Bottle Counter"
            description="Designed and implemented a bottle counter to promote sustainability awareness."
            skills="UI/UX Design | Front-End | Full-Stack | Internship"
            className="purple"
          />
          <Project
            image={wonderreprint}
            company="Wonderfil"
            title="Reprint Sticker"
            description="Aligned new design's visual elements with the existing brand identity."
            skills="UI/UX Design | Wireframing | Internship"
            className="green"
          />
          <Project
            image={xroads}
            company="Crossroads"
            title="Visual Rebrand"
            description="Developed a fresh visual identity to strengthen the club’s overall brand presence."
            skills="Graphic Design | Illustration | Project"
            className="purple"
          />
          <Project
            image={sodoi}
            company="Wendy"
            title="SoDoI Website Revamp"
            description="Aligned new design's visual elements with the existing brand identity."
            skills="UI/UX Design | Web Development | Project"
            className="green"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={-0.5} className="cloud">
          <div className="cloud-container cloud6">
            <img src={cloud} className="cloud-image" id="cloud6"/>
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={0.15} offset={4.05}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;
