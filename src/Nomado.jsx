import React from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import "./assets/css/CaseStudy.css";
import gradient from "./assets/img/green-gradient.png";
import userflow from "./assets/img/nomado-userflow.png";
import lofiScroll from "./assets/img/lofi-scroll.png";
import lofiCallout from "./assets/img/lofi-callout.png";
import colorPalette from "./assets/img/color-palette.png";
import fonts from "./assets/img/nomado-fonts.png";
import medDemo from "./assets/img/med-demo.mov";
import loDemo from "./assets/img/lo-demo.mov";
import oldScroll from "./assets/img/old-scroll.png";
import newScroll from "./assets/img/new-scroll.mp4";
import arrow from "./assets/img/arrow.png";
import oldSchedule from "./assets/img/old-schedule.png";
import newSchedule from "./assets/img/new-schedule.png";
import nomDemo from "./assets/img/nomado-demo.mp4";
import aboutDemo from "./assets/img/about-demo.mov";
import journalDemo from "./assets/img/journal-demo.mp4";
import nomadoCase from "./assets/img/nomado-case.png";

function Nomado() {
  return (
    <div className="case-study-container">
      <Header />
      <div
        className="background"
        style={{
          backgroundImage: `url(${gradient})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      ></div>
      <div className="study-container">
        <img
          src={nomadoCase}
          className="gradient-image"
          alt="Gradient Background"
        />
        <h1 className="study-title">Nomado Website Redesign</h1>
        <div className="study-info">
          <hr className="study-divider" />
          <div className="study-info-row">
            <div className="study-info-item">
              <p className="info-label">ROLE</p>
              <p className="info-value">Point Web Developer & Designer</p>
            </div>
            <div className="study-info-item">
              <p className="info-label">TOOLS</p>
              <p className="info-value">Figma, Photoshop, SquareSpace</p>
            </div>
          </div>
          <div className="study-info-row">
            <div className="study-info-item">
              <p className="info-label">TIMELINE</p>
              <p className="info-value">2 Months</p>
            </div>
            <div className="study-info-item">
              <p className="info-label">SKILLS</p>
              <p className="info-value">UX/UI Design, Web Development</p>
            </div>
          </div>
          <hr className="study-divider" />
          <div className="study-section" id="overview ">
            <h2 className="study-subtitle">OVERVIEW</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">What is Nomado?</p>
              <p className="study-text">
                Nomado is a startup specializing in digital menus for hotels
                that serve as a home page for their services. It aims to elevate
                the guest experience and boost engagement in hotel offerings.
              </p>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">The Problem</p>
              <p className="study-text">
                Nomado underwent a rebrand and{" "}
                <span>shifted their target clients</span> from restaurants to
                high-end hotels. However, their website which promoted the
                product did not reflect this change,{" "}
                <span>creating a mismatch</span> between its brand identity and
                its target clientele.
              </p>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Project Goal</p>
              <p className="study-text">
                I was tasked to redesign and develop a landing page that is
                easy-to-use and clearly communicates Nomado’s{" "}
                <span>value proposition</span>
                in an engaging manner to high-end hotel clients. I was primarily
                on my own but had the Design Director as a close consultant.
              </p>
            </div>
          </div>
          <hr className="study-divider" />
          <div className="study-section" id="design-process">
            <h2 className="study-subtitle">DESIGN PROCESS</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Discovery</p>
              <p className="study-text">
                As someone who wasn’t too familiar with the hotel business
                space, I conducted <span>in-depth interviews</span> with the
                company’s CEO, Creative Director, and the business director to
                gather insight into the audience Nomado was targeting. I also
                conducted <span>market research</span> into typical luxury hotel
                websites, products, and brand identity, which led me to the
                conclusion that luxury hotels prioritize:
              </p>
              <div className="study-items-container">
                <div className="study-items">
                  <p className="study-item">💆‍♀️ Seamless Guest Experiences</p>
                  <p className="study-item">🛎️ High-Quality Service.</p>
                </div>
              </div>
              <p className="study-text">
                I also conducted <span>user testing</span> on the current
                website with 6 individuals, revealing 4 key issues:
              </p>
              <div className="study-items-container">
                <div className="study-items" style={{ margin: "0" }}>
                  <div className="study-item-group-text">
                    <p className="study-item">
                      💵 Lack of a Clear Value Proposition
                    </p>
                    <p className="study-text">
                      Users didn't understand what Nomado's product was or its
                      benefits.
                    </p>
                  </div>
                  <div className="study-item-group-text">
                    <p className="study-item">🥱 Unengaging Visual Design</p>
                    <p className="study-text">
                      Users felt the design was bland and didn't reflect a luxury product.
                    </p>
                  </div>
                </div>
                <div className="study-items">
                <div className="study-item-group-text">
                    <p className="study-item">📠 Outdated Information</p>
                    <p className="study-text">
                      Users found some information on the site to be old and not reflective of the current product offerings.
                    </p>
                  </div>
                  <div className="study-item-group-text">
                    <p className="study-item">🗺️ Confusing Interface</p>
                    <p className="study-text">
                      Users were navigated to multiple different pages across
                      the site to engage with the product.
                    </p>
                  </div>
                </div>
              </div>
              <p className="study-text">
                Finally, I conducted a <span>competitive analysis</span> on our
                competitors to uncover key{" "}
                <span>differentiation opportunities</span> for Nomado:
              </p>
              <div className="study-items-container">
                <div className="study-items">
                  <p className="study-item">💎 Focus on High-End Clientele</p>
                  <p className="study-item">
                    💬 Stand-Out Features like AI Chatbot
                  </p>
                </div>
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Ideation</p>
              <p className="study-text">
                High-end clients only offered products that met their standards
                and branding. My findings highlighted the{" "}
                <span>need for a high-end digital presence</span> that aligns
                with the sophistication expected in luxury hospitality and
                differentiated us from our competitors.
              </p>
              <p className="study-text">
                To address the usability issues and confusion in the current
                site, I focused on proper <span>information architecture</span>{" "}
                and finding a clear user flow for users to easily{" "}
                <span>understand Nomado’s value proposition and act:</span>
              </p>
              <ol className="study-list">
                <li className="study-list-item">
                  <span>Landing:</span> An immersive screen to capture
                  attention.
                </li>
                <li className="study-list-item">
                  <span>Exploration:</span> Product pitch, features, and
                  testimonials to build trust and understanding.
                </li>
                <li className="study-list-item">
                  <span>Decision Point:</span> Users decide to engage further
                  with the journal or request a demo
                </li>
                <li className="study-list-item">
                  <span>Request a Demo:</span> The ultimate goal for users to
                  reach in this flow, signaling strong interest and potential
                  conversation.
                </li>
              </ol>
              <img src={userflow} />
              <br />
              <br />
              <br />
              <p className="study-text">
                I also pitched 2 new methods of showcasing information to
                smoothen the user experience:
              </p>
              <div className="study-image-text">
                <img src={lofiScroll} style={{ width: "40%" }} />
                <div className="image-text-content">
                  <p className="image-text-title">
                    🎡 Product Features Scroll Wheel
                  </p>
                  <p className="image-text-description">
                    I pitched a scroll wheel function to view the product’s key
                    features, enabling users to quickly browse without having to
                    navigate away from the page, increasing the <span>likelihood of
                    users staying</span> on the page longer.
                  </p>
                </div>
              </div>
              <div className="study-image-text">
                <img src={lofiCallout} style={{ width: "40%" }} />
                <div className="image-text-content">
                  <p className="image-text-title"> 📖 A Journal Call Out</p>
                  <p className="image-text-description">
                    The journal is a page with supplementary information that
                    interviewees found <span>crucial for decision-making</span>. By adding a
                    call out to it on the landing page, the info-seeking process
                    is made seamless while increasing the likelihood of users
                    viewing it.
                  </p>
                </div>
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Branding</p>
              <p className="study-text">
                To elevate our online presence, the Design Director and I
                implemented a new brand identity, focusing on blending luxury
                and cutting-edge tech.
              </p>
              <div className="study-image-text">
                <img src={colorPalette} style={{ width: "40%" }} />
                <img src={fonts} style={{ width: "40%" }} />
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Low-Mid Fidelity Iteration</p>
              <video
                className="VideoTag"
                style={{ width: "100%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={loDemo} type="video/mp4" />
              </video>
              <p className="study-text">
                User testing on my lo-fi wireframe revealed that vanilla design
                still failed to capture that bespoke vision we were aiming for.
                After further research, I found that luxury clients will utilize
                <span> large, real-life images</span> to induce a feeling of immersive
                presence, which led me to this mid-fi mockup:
              </p>
              <video
                className="VideoTag"
                style={{ width: "100%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={medDemo} type="video/mp4" />
              </video>
              <p className="study-text" style={{ marginTop: "20px" }}>
                However, this whole page still seemed lacking. It was generic,
                clinical, and un-engaging so I dove back into iteration,
                focusing on making designs more visually cohesive and uniquely
                luxurious while also addressing further usability issues
                informed by user testing:
              </p>
              <div className="study-text-section">
                <p className="study-text-section-title">
                  🎡 Product Features Scroll Wheel
                </p>
                <p className="study-text-section-content">
                  The scroll wheel failed to engage users in the product
                  features, as they <span>rarely clicked through all of the options.</span>
                  To address this, I redirected the feature exploration to be
                  fully scrollable but still interactive to allow ease of
                  navigation.
                </p>
              </div>
              <div className="study-img-compare">
                <div className="img-1" style={{ width: "45%" }}>
                  <img src={oldScroll} />
                </div>
                <div className="img-2">
                  <img src={arrow} />
                </div>
                <div className="img-3" style={{ width: "45%" }}>
                  <video
                    className="VideoTag"
                    style={{ width: "100%" }}
                    controls
                    autoPlay
                    loop
                    muted
                  >
                    <source src={newScroll} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="study-text-section">
                <p className="study-text-section-title">✉️ Schedule a Demo</p>
                <p className="study-text-section-content">
                  The <span>ultimate goal is for users to Request a Demo</span>, so the demo
                  request needed to be more impressionable. So I implemented an
                  actual envelope at the end to reflect a luxurious invitation
                  and expanded the section to fill the entire page to fit the rest of the site branding.
                </p>
              </div>
              <div className="study-img-compare">
                <div className="img-1" style={{ width: "45%" }}>
                  <img src={oldSchedule} />
                </div>
                <div className="img-2">
                  <img src={arrow} />
                </div>
                <div className="img-3" style={{ width: "45%" }}>
                  <img src={newSchedule} />
                </div>
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Final Prototype</p>
              <p className="study-text">
                These insights led me to my final prototype for the landing page
                that blends <span>luxury and high-tech</span>, clearly indicating Nomado’s
                value proposition and engaging users to explore the product:
              </p>
              <video
                className="VideoTag"
                style={{ width: "40%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={nomDemo} type="video/mp4" />
              </video>
              <p className="study-text">
                I also redesigned the About and Journal page to fit this new
                branding:
              </p>
              <video
                className="VideoTag"
                style={{ width: "40%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={aboutDemo} type="video/mp4" />
              </video>
              <video
                className="VideoTag"
                style={{ width: "40%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={journalDemo} type="video/mp4" />
              </video>
            </div>
          </div>
          <hr className="study-divider" />
          <div className="study-section" id="reflections">
            <h2 className="study-subtitle">REFLECTIONS</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Results & Takeaways</p>
              <p className="study-text">
                The final prototype was programmed and published by me,
                currently live at{" "}
                <a
                  href="https://www.nommenu.com/"
                  className="link"
                  target="_blank"
                >
                  {" "}
                  Nomado.tech
                </a>
                . The new website increased new viewership by <span>36%</span>,
                decreased user bounce rate by <span>24%</span>, and increased
                new client demo inquiries by <span>83%</span>.
              </p>
              <p className="study-text">
                The CEO reached out a couple weeks after the completion of the
                project informing me of <span>2 new big-name luxury hotels</span> that joined
                Nomado’s roster—exciting! He was also no longer embarrassed to
                direct his clients to the website for more information.
              </p>
              <div
                className="study-image-text"
                style={{ alignItems: "flex-start" }}
              >
                <div className="image-text-content">
                  <p className="image-text-title">⏱️ Time Constraints</p>
                  <p className="image-text-description">
                    This experience taught me to be adaptable and resourceful to
                    keep up with a <span>fast-paced environment</span> and shifting
                    deadlines. I juggled designing and programming for 2 months,
                    sometimes needing to rely on <span>my own design intuition</span> to meet
                    deadlines. Despite the lack of time and experience, I leaned
                    on my online research and user testing to validate my design
                    decisions.
                  </p>
                </div>
                <div className="image-text-content">
                  <p className="image-text-title">👥 Taking Critiques</p>
                  <p className="image-text-description">
                    I worked closely with the CEO and Design Director throughout
                    this process, learning to <span>balance user and business needs</span>.
                    For example, I wanted to shorten the user journey as much as
                    possible, but learned we wanted to engage users to take
                    their time exploring the product. This was my first exposure
                    to critical design feedback and I learned to <span>transform it
                    into tangible change</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Nomado;
