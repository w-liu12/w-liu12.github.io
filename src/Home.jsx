import React, { useState, useEffect, useRef } from "react";
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
import clock from "./assets/img/clock.png";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Home() {
  const [numPages, setNumPages] = useState(4.2);
  const projectsRef = useRef(null);
  const [forceUpdateKey, setForceUpdateKey] = useState(0);
  
  const calculatePages = () => {
    // Get the projects container element
    const projectsContainer = document.querySelector('.projects-container');
    
    if (projectsContainer) {
      // Get the full height of the projects container including all projects
      const projectsContainerHeight = projectsContainer.scrollHeight;
      
      console.log("Projects container height:", projectsContainerHeight);
      
      // Calculate viewport height
      const viewportHeight = window.innerHeight;
      console.log("Viewport height:", viewportHeight);
      
      if (viewportHeight > 0 && projectsContainerHeight > 0) {
        // Calculate how many pages the projects container takes up
        const projectsPages = projectsContainerHeight / viewportHeight;
        
        // Get footer height
        const footerHeight = document.querySelector('footer')?.offsetHeight || 0;
        const footerFactor = footerHeight / viewportHeight;
        
        // Add a smaller consistent gap (0.1 pages worth of space)
        const consistentGap = 0.1; // Reduced from 0.3 to 0.1
        
        // Calculate total pages needed: landing page + projects pages + gap + footer
        const pagesNeeded = 1 + projectsPages + consistentGap + footerFactor;
        console.log("Pages needed:", pagesNeeded);
        
        return pagesNeeded;
      }
    }
    
    return 4.2; // Default fallback
  };
  useEffect(() => {
    // Initial calculation after DOM is ready - with longer delay
    const initialTimer = setTimeout(() => {
      const pagesNeeded = calculatePages();
      if (Math.abs(numPages - pagesNeeded) > 0.1) {
        setNumPages(pagesNeeded);
        setForceUpdateKey(prev => prev + 1);
      }
    }, 500);
    
    // Also run again after a longer delay to ensure everything is rendered
    const secondTimer = setTimeout(() => {
      const pagesNeeded = calculatePages();
      if (Math.abs(numPages - pagesNeeded) > 0.1) {
        setNumPages(pagesNeeded);
        setForceUpdateKey(prev => prev + 1);
      }
    }, 1000);
    
    const handleResize = () => {
      const pagesNeeded = calculatePages();
      if (Math.abs(numPages - pagesNeeded) > 0.1) {
        setNumPages(pagesNeeded);
        setForceUpdateKey(prev => prev + 1);
      }
    };
    
    // Update when window resizes
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(initialTimer);
      clearTimeout(secondTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  // Log when numPages changes
  useEffect(() => {
    console.log("numPages updated to:", numPages);
  }, [numPages]);
  
  // Get viewport height to calculate exact footer factor
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const footerHeight = 15; // 15vh from your CSS
  const footerFactor = footerHeight / 100; // Convert vh to factor
  
  // Calculate footer offset to place exactly at bottom
  const footerOffset = numPages - footerFactor;
  
  return (
    <>
      <Parallax pages={numPages} key={forceUpdateKey}>
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
            <img src={cloud} className="cloud-image" id="cloud1" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4} className="cloud">
          <div className="cloud-container cloud2">
            <img src={cloud} className="cloud-image" id="cloud2" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.2} className="cloud">
          <div className="cloud-container cloud3">
            <img src={cloud} className="cloud-image" id="cloud3" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.6} className="cloud">
          <div className="cloud-container cloud4">
            <img src={cloud} className="cloud-image" id="cloud4" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.3} className="cloud">
          <div className="cloud-container cloud5">
            <img src={cloud} className="cloud-image" id="cloud5" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.9}
          factor={2.8}
          speed={0.05}
          className="projects-container"
          id="projects"
          ref={projectsRef}
          style={{ top: "0" }}
        >
          <Project
            image={mobius}
            company="Möbius Teach"
            title="Designed a B2B SAAS App for Accessible Learning that Raised Retention Rates by 66%"
            skills="UI/UX Design | Product Design | Prototyping"
            link="https://pine-canid-a47.notion.site/M-bius-Teach-1b58814b18e58074939edc30ce0f903d?pvs=4"
            className="purple"
          />
          <Project
            image={nom}
            company="Nomado"
            title="Redesigned Website to Align with New Target Audience, Increasing New Client Interest by 57%"
            skills="UI/UX Design | Web Development | Internship"
            link="https://pine-canid-a47.notion.site/Nomado-Website-Redesign-18a8814b18e580cba0acdf1f4ede345c?pvs=4"
            className="green"
          />
          <Project
            image={clock}
            company="Wendy"
            title="Created and Coded a Pomodoro Study Clock With HTML, CSS, and JS, Boosting Personal Productivity by 74%"
            skills="Front-End | UI/UX Design | Project"
            link="https://github.com/w-liu12/wdd/tree/f277190275d56a53d7396ea5b9ac8ecc7400268a/final"
            className="purple"
          />
          <Project
            image={wonderbottle}
            company="Wonderfil"
            title="Designed and Prototyped Bottles Saved Feature for Refill Company, Raising User Environmental Impact Awareness by 58%"
            skills="UI/UX Design | Front-End | Full-Stack | Internship | NDA"
            className="green"
          />
          <Project
            image={xroads}
            company="Crossroads"
            title="Spearheaded Visual Identity Rebrand for Christian Fellowship, Increasing Social Media Engagement by 343%"
            skills="Graphic Design | Illustration | Project"
            link="https://www.figma.com/design/ct6HgOJeMSq40zXw6XDDu0/Crossroads-Brand-Identity?node-id=0-1&t=btpTVFI6FysrYB4H-1"
            className="purple"
          />
          <Project
            image={sodoi}
            company="Wendy"
            title="Revamped Local Coffee Shop Website to Optimize Content Layout and Visual Appeal"
            skills="UI/UX Design | Web Development | Project"
            link="https://github.com/w-liu12/wdd/tree/main/midterm"
            className="green"
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} speed={-0.5} className="cloud">
          <div className="cloud-container cloud6">
            <img src={cloud} className="cloud-image" id="cloud6" />
          </div>
        </ParallaxLayer>
        
        {/* Footer with exact factor to match its height */}
        <ParallaxLayer factor={footerFactor} offset={footerOffset} speed={0}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Home;