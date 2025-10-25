import React from "react";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import "./assets/css/CaseStudy.css";
import gradient from "./assets/img/purple-gradient.png";
import colorPalette from "./assets/img/color-palette.png";
import fonts from "./assets/img/nomado-fonts.png";
import mobiusDemo from "./assets/img/mobius-demo.mp4";
import mobiusCase from "./assets/img/mobius-case.png";
import mobiusCompetitiveAnalysis from "./assets/img/mobius-competitiveAnalysis.png";
import mobiusLofi from "./assets/img/mobius-lofi.png";
import mobiusCalLofi from "./assets/img/mobius-calendar-lofi.png";
import mobiusHifi from "./assets/img/mobius-hifi.png";
import mobiusCalHifi from "./assets/img/mobius-calendar-hifi.png";

function Mobius() {
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
          src={mobiusCase}
          className="gradient-image"
          alt="Gradient Background"
        />
        <h1 className="study-title theme-purple">
          Möbius Teach End-to-End Product Design
        </h1>
        <div className="study-info">
          <hr className="study-divider theme-purple" />
          <div className="study-info-row">
            <div className="study-info-item">
              <p className="info-label theme-purple">ROLE</p>
              <p className="info-value">Product Designer / Engineer</p>
            </div>
            <div className="study-info-item">
              <p className="info-label theme-purple">TOOLS</p>
              <p className="info-value">Figma, Photoshop</p>
            </div>
          </div>
          <div className="study-info-row">
            <div className="study-info-item">
              <p className="info-label theme-purple">TIMELINE</p>
              <p className="info-value">2 Months</p>
            </div>
            <div className="study-info-item">
              <p className="info-label theme-purple">SKILLS</p>
              <p className="info-value">
                UX/UI Design, Competitive Analysis, Interviews
              </p>
            </div>
          </div>
          <hr className="study-divider theme-purple" />
          <div className="study-section" id="overview ">
            <h2 className="study-subtitle theme-purple">OVERVIEW</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">What is Möbius Teach?</p>
              <p className="study-text">
                Möbius Teach is an early-stage EdTech startup building a B2B
                SaaS web app that functions as a digital study lounge for SAT
                students. The platform aims to revolutionize private education
                by streamlining operations and providing personalized digital
                tutoring.
              </p>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">The Problem</p>
              <p className="study-text">
                Private education companies face significant challenges with
                <span className="theme-purple">
                  {" "}
                  high operational costs{" "}
                </span>{" "}
                from manual tasks and an inability to offer
                <span className="theme-purple">
                  {" "}
                  personalized learning at a large scale
                </span>
                .
              </p>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Project Goal</p>
              <p className="study-text">
                As a Product Designer on a team of six (including a project
                manager, engineers, and other designers), I was tasked with
                designing a web app to solve these core business problems. Over
                10 weeks, I took ownership of the{" "}
                <span className="theme-purple">end-to-end design</span> for the
                Student Diagnostic and Scheduling features, from research and
                ideation to high-fidelity prototyping.
              </p>
            </div>
          </div>
          <hr className="study-divider theme-purple" />
          <div className="study-section" id="design-process">
            <h2 className="study-subtitle theme-purple">DESIGN PROCESS</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Discovery</p>
              <p className="study-text">
                To gain a better understanding of our user needs, I started with
                <span className="theme-purple"> user research</span> on SAT
                students, instructors, and parents as well as their experience
                with current digital SAT prep platforms. Through interviews and
                surveys, we identified{" "}
                <span className="theme-purple">three primary user needs:</span>
              </p>
              <div className="study-items-container">
                <div className="study-items">
                  <p className="study-item">🎯 Personalized Learning</p>
                  <p className="study-item">💰 Affordable Pricing</p>
                  <p className="study-item">📅 Easy Scheduling</p>
                </div>
              </div>
              <p className="study-text">
                Then, to understand the landscape, I conducted{" "}
                <span className="theme-purple">competitive analysis</span>{" "}
                across 26 different platforms to inform the development of the
                features, of which I was focused on education and scheduling
                features. analysis across 26 different platforms to inform the
                development of the features, of which I was focused on education
                and scheduling features.
              </p>
              <img src={mobiusCompetitiveAnalysis} />
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Solutioning & Lofi Mockups</p>
              <p className="study-text">
                These findings led my team to focus on{" "}
                <span class="theme-purple">personalized learning</span> in our
                platform and developing features that{" "}
                <span class="theme-purple">
                  addressed competitor pain points
                </span>{" "}
                while maintaining a{" "}
                <span class="theme-purple">minimalist interface</span> anyone
                could navigate.
              </p>
              <p className="study-text">
                My work focused on translating our research insights for the
                Student Profiles and Scheduling experiences.
              </p>
              <p className="study-text-title">👤 Student Profiles: Roadmap</p>
              <p className="study-text">
                The goal was to give students a clear, intuitive overview of
                their performance without overwhelming them. My background in
                <span class="theme-purple">
                  {" "}
                  visualizing numerical and categorical data
                </span>{" "}
                came in handy here!
              </p>
              <img src={mobiusLofi} style={{ width: "100%" }} />
              <br />
              <br />
              <br />
              <p className="study-text">
                I included a “Roadmap” feature for students to view their
                progress and future learning plan, as{" "}
                <span class="theme-purple">informed by our interviews</span>.
                Because the SAT has multiple topics within subjects, I organized
                it so that users would be able to easily analyze which topics
                needed more attention, which was a{" "}
                <span class="theme-purple">competitor pain point</span>. I
                followed up with more user interviews to{" "}
                <span class="theme-purple">validate and refine</span> how the
                information was presented.
              </p>
              <p className="study-text-title">
                📅 Scheduling: AI Smart Calendar
              </p>
              <p className="study-text">
                The goal was to eliminate the time and frustration involved in
                scheduling tutoring sessions, so I decided to{" "}
                <span class="theme-purple">harness AI</span> to anticipate
                rescheduling effort and suggest them ASAP.
              </p>
              <div className="centered-image">
                <img src={mobiusCalLofi} style={{ width: "90%" }} />
              </div>
              <br />
              <br />
              <br />
              <p className="study-text">
                I followed up with more interviews where I learned my feature
                wasn’t necessarily solving the most imperative issues:
              </p>
              <div className="study-items-container">
                <div className="study-items" style={{ margin: "0" }}>
                  <div className="study-item-group-text">
                    <p className="study-item">❌ Communication Delays</p>
                    <p className="study-text">
                      Manually conversing back and forth about availability is
                      the most frustrating and time-consuming aspect.
                    </p>
                  </div>
                  <div className="study-item-group-text">
                    <p className="study-item">❌ Inaccurate Meeting Times</p>
                    <p className="study-text">
                      A meeting’s time often overshoots or undershoots its
                      allotted time, which led to rescheduled meetings or
                      under-utilized free time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Hi-Fi Mockups</p>
              <p className="study-text">
                Because of our short project timeline, we needed to jump
                straight into high-fis.
              </p>
              <p className="study-text-title">👤 Student Profiles: Roadmap</p>
              <p className="study-text">
                I realized that a differentiation point for Möbius was being
                more data and diagnostic heavy, to help users truly understand
                what it was that they needed to improve and why, which led me to
                these iterations:
              </p>
              <img src={mobiusHifi} style={{ width: "100%" }} />
              <br />
              <br />
              <br />
              <p className="study-text-title">
                📅 Scheduling: AI Smart Calendar
              </p>
              <p className="study-text">
                This Iteration of the calendar harnessed AI to have an
                <span className="theme-purple">
                  {" "}
                  auto-scheduling feature
                </span>{" "}
                which will recognize and schedule regular meetings
                automatically, with all party’s schedules in mind. It also
                analyzed each meeting and{" "}
                <span className="theme-purple">
                  recommending a time based on other meetings
                </span>{" "}
                of the same type.
              </p>
              <div className="centered-image">
                <img src={mobiusCalHifi} style={{ width: "90%" }} />
              </div>

              <p className="study-text-title">📅 Scheduling</p>
              <div className="study-image-text">
                <img src={colorPalette} style={{ width: "40%" }} />
                <img src={fonts} style={{ width: "40%" }} />
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Final Prototype</p>
              <p className="study-text">
                Although I focused on two features, I also helped develop and
                prototype other features in this project, especially, when my
                teammates were swamped. Here is our work:
              </p>
              <video
                className="VideoTag"
                style={{ width: "100%" }}
                controls
                autoPlay
                loop
                muted
              >
                <source src={mobiusDemo} type="video/mp4" />
              </video>
            </div>
          </div>
          <hr className="study-divider theme-purple" />
          <div className="study-section" id="reflections">
            <h2 className="study-subtitle theme-purple">REFLECTIONS</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Results & Takeaways</p>
              <p className="study-text">
                The final design was a major success, delivering measurable
                value for the business and its beta testers. Our developed
                features not only{" "}
                <span className="theme-purple">
                  increased studying progression by 66%
                </span>
                , it also
                <span className="theme-purple">
                  {" "}
                  reduced time spent on administrative tasks by 41%
                </span>
                , with the AI calendar being the primary driver of this
                efficiency. The scheduling feature was the most praised
                component in user testing, with users calling it "incredibly
                simple" and a "huge time-saver."
              </p>
              <div
                className="study-image-text"
                style={{ alignItems: "flex-start" }}
              >
                <div className="image-text-content">
                  <p className="image-text-title">🤖 The Power of AI</p>
                  <p className="image-text-description">
                    This project taught me that the{" "}
                    <span className="theme-purple">best AI is invisible</span>.
                    The goal wasn't to build a flashy "AI feature," but to solve
                    a real, tedious human problem—the frustration of scheduling.
                    I learned to use AI as a tool to{" "}
                    <span className="theme-purple">
                      automate the tedious parts{" "}
                    </span>
                    while keeping the user in full control of the final
                    decision. Effective AI in UX should feel less like
                    interacting with a machine and more like having a
                    hyper-efficient assistant working silently in the
                    background.
                  </p>
                </div>
                <div className="image-text-content">
                  <p className="image-text-title">
                    🔋 The Power of Component-Based Design
                  </p>
                  <p className="image-text-description">
                    Creating a{" "}
                    <span className="theme-purple">component library</span> in
                    Figma was a game-changer for our team's efficiency. It not
                    only simplified the creation of mockups but also made the
                    handoff to developers using React much more seamless. As a
                    developer myself, I appreciate every ounce of{" "}
                    <span className="theme-purple">
                      clarity in designer-to-developer communication
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Looking Back</p>
              <p className="study-text" style={{ marginBottom: "60px" }}>
                Given more time, I would expand our use of AI to transform the
                platform from a streamlined tool into an
                <span className="theme-purple"> adaptive learning engine </span>
                that adjusts student roadmaps in real-time and providing
                AI-powered feedback on written assignments. Ultimately, these
                features would create a deeply personalized and proactive
                learning experience, identifying at-risk students and driving
                better academic outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mobius;
