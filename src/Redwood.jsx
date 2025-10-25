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
import redwoodCase from "./assets/img/rcu-case.png";
import ogOPA from "./assets/img/ogOPA.png";
import opa1 from "./assets/img/opa1.png";
import opa2 from "./assets/img/opa2.png";
import opa3 from "./assets/img/opa3.png";
import opa4 from "./assets/img/opa4.png";
import info1 from "./assets/img/info1.png";
import info2 from "./assets/img/info2.png";
import info3 from "./assets/img/info3.png";
import rcuFinal from "./assets/img/rcu-final.png";

function Redwood() {
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
          src={redwoodCase}
          className="gradient-image"
          alt="Gradient Background"
        />
        <h1 className="study-title theme-green">
          Redwood Credit Union Onboarding Redesign
        </h1>
        <div className="study-info">
          <hr className="study-divider theme-green" />
          <div className="study-info-row">
            <div className="study-info-item">
              <p className="info-label theme-green">ROLE</p>
              <p className="info-value">UX Design Intern</p>
            </div>
            <div className="study-info-item">
              <p className="info-label theme-green">TOOLS</p>
              <p className="info-value">Figma, Wordpress, Jira</p>
            </div>
          </div>
          <div className="study-info-row">
            <div className="study-info-item">
              <p className="info-label theme-green">TIMELINE</p>
              <p className="info-value">48 Hours</p>
            </div>
            <div className="study-info-item">
              <p className="info-label theme-green">SKILLS</p>
              <p className="info-value">
                Mobile UX Design, Rapid Prototyping, Cross-Functional
              </p>
            </div>
          </div>
          <hr className="study-divider theme-green" />
          <div className="study-section" id="overview ">
            <h2 className="study-subtitle theme-green">OVERVIEW</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">What is Redwood Credit Union?</p>
              <p className="study-text">
                Redwood Credit Union (RCU) is a not-for-profit financial
                cooperative whose mission is to serve its members' financial
                well-being. This translates to core values of{" "}
                <span className="theme-green">
                  Member-First Focus, Trust & Transparency, and Financial
                  Wellness.
                </span>
              </p>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">The Problem</p>
              <p className="study-text">
                Overdraft Pay Advantage is a service RCU offers to help cover
                members’ payments when they over-draw their account. Our current
                Overdraft Protection Agreement (OPA) flow during member
                onboarding is a{" "}
                <span className="theme-green">
                  significant source of complaints
                </span>{" "}
                because it lacks clarity. Members are not well-informed about
                the financial implications of their decision, which has led to
                widespread frustration and a high volume of negative feedback.{" "}
                <span className="theme-green">
                  This directly goes against their core values.
                </span>
              </p>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Project Goal</p>
              <p className="study-text">
                I was chosen to be the{" "}
                <span className="theme-green">point UX Designer</span> on a team
                of cross-functional leaders (Business Services, Compliance,
                Communications, and Digital Experience), handpicked by the CTO,
                tasked with redesigning this flow to{" "}
                <span className="theme-green"> address member confusion</span>
                and{" "}
                <span className="theme-green">
                  realign with RCU’s core values
                </span>
                . My role was to audit the flow, gather stakeholder
                requirements, rapidly prototype, and balance member-facing
                simplicity with complex legal and compliance needs.
              </p>
            </div>
          </div>
          <hr className="study-divider theme-green" />
          <div className="study-section" id="design-process">
            <h2 className="study-subtitle theme-green">DESIGN PROCESS</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Discovery</p>
              <p className="study-text">
                As someone new to finance, my{" "}
                <span className="theme-green">fresh perspective</span> was an
                asset. I could genuinely empathize with member confusion,
                helping me spot gaps in understanding that internal experts
                might miss. I advocated for{" "}
                <span className="theme-green">plain language</span> to champion
                the <span className="theme-green">Member-First value</span>.
              </p>
              <div className="study-image-text">
                <img src={ogOPA} style={{ width: "40%" }} />
                <div className="image-text-content">
                  <p className="image-text-title"> 💻 Current Display</p>
                  <p className="image-text-description">
                    It has three choices: full coverage, partial coverage, and
                    no coverage.
                  </p>
                </div>
              </div>
              <p className="study-text">
                {" "}
                The team offered a number of perspectives, but I knew I needed
                to understand the user more directly first, so I scheduled a
                meeting with the{" "}
                <span className="theme-green">
                  Member Experience Department
                </span>
                . I consolidated my initial thoughts and their insights into{" "}
                <span className="theme-green">2 main problems</span> I wanted to
                address with this redesign:
              </p>
              <p className="study-text">
                I also conducted{" "}
                <span className="theme-green">user testing</span> on the current
                website with 6 individuals, revealing 4 key issues:
              </p>
              <div className="study-items-container">
                <div className="study-items" style={{ margin: "0" }}>
                  <div className="study-item-group-text">
                    <p className="study-item">❓ Lack of Context</p>
                    <p className="study-text">
                      Members{" "}
                      <span className="theme-green">
                        didn't understand what OPA was
                      </span>
                      , why it was offered, or why they were being charged fees
                      and also had no idea what would happen if they opted out
                      of coverage. This directly violated the values of
                      Transparency and Financial Wellness.
                    </p>
                  </div>
                  <div className="study-item-group-text">
                    <p className="study-item">🚫 Confusing Choices</p>
                    <p className="study-text">
                      Users were presented with three{" "}
                      <span className="theme-green">
                        unclear choices with no explanation
                      </span>
                      : "full coverage," "partial coverage (checks and ACH)," or
                      "no coverage." This failed the value of educating
                      Financial Wellness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Hi-Fi Solutioning</p>
              <p className="study-text">
                Due to time constraints, I dove straight into high-fidelity
                prototyping to quickly visualize potential solutions for
                stakeholder review.
              </p>
              <p className="study-text-title">❓ Lack of Context</p>
              <p className="study-text">
                I needed to ensure users were informed when making this
                financial decision. I simply decided to include more information
                about what OPA is and providing examples for transactions that
                may entail. However, this turned out to be a not so simple
                feat... The biggest challenge was{" "}
                <span className="theme-green">aligning 6 departments </span>
                (Compliance, Digital Experience, etc.).
              </p>
              <div className="study-image-text">
                <div className="image-text-content">
                  <p className="image-text-title"> 1️⃣ First Iteration</p>
                  <p className="image-text-description">
                    This iteration taught a crucial lesson in balancing
                    competing needs. My goal was to be concise, but feedback
                    from compliance revealed that some phrasing (highlighted)
                    was legally risky. The challenge was then to refine the
                    text—adding more context and descriptive language—while
                    carefully avoiding any wording that could be seen as a
                    guarantee.
                  </p>
                </div>
                <img src={opa1} style={{ width: "30%" }} />
              </div>
              <hr className="study-divider theme-green" />
              <div className="study-image-text">
                <div className="image-text-content">
                  <p className="image-text-title">2️⃣ Second Iteration</p>
                  <p className="image-text-description">
                    This is where the process became truly iterative. Although I
                    added in more information (highlighted), feedback from
                    Member Experience showed we were still missing key new
                    pieces of information. Users were explicitly complaining
                    that the flow failed to mention what transactions OPA
                    covers, the OPA coverage fee, and the Non-Sufficient Funds
                    (NSF) fee.
                  </p>
                </div>
                <img src={opa2} style={{ width: "30%" }} />
              </div>
              <hr className="study-divider theme-green" />
              <div className="study-image-text">
                <div className="image-text-content">
                  <p className="image-text-title">3️⃣ Third Iteration</p>
                  <p className="image-text-description">
                    This design was too wordy. To improve clarity, we focused on
                    simplifying the text and defining financial terms like 'ACH'
                    without overwhelming users or creating compliance issues.
                  </p>
                </div>
                <img src={opa3} style={{ width: "30%" }} />
              </div>
              <hr className="study-divider theme-green" />
              <div className="study-image-text">
                <div className="image-text-content">
                  <p className="image-text-title">
                    4️⃣ ✅ Fourth (& Final) Iteration
                  </p>
                  <p className="image-text-description">
                    This version was legally compliant, correctly conveyed our
                    services, addressed the member confusion, and ensured it was
                    displayed in a digestible method for all audiences. It was
                    approved by all departments as well as our CTO.
                  </p>
                </div>
                <img src={opa4} style={{ width: "30%" }} />
              </div>
              <p className="study-text">
                Although I initially wanted to keep it short for the sake of
                user experience, I realized it was{" "}
                <span className="theme-green">
                  not viable with the given legal constraints and user confusion
                </span>
                . Our final iteration is longer than anticipated but its length
                implies the importance of this decision, and will{" "}
                <span className="theme-green">
                  incline users to think more critically
                </span>{" "}
                in the decision-making process. This directly accomplishes the
                Financial Wellness and Transparency goals.
              </p>
              <p className="study-text-title">🚫 Confusing Choices</p>
              <p className="study-text">
                Next, I wanted to simplify the decision-making process by
                addressing{" "}
                <span className="theme-green">
                  how the decision was presented{" "}
                </span>
                to users. Stakeholders initially wanted to minimize the options
                to just full-coverage or no-coverage—a simple yes-or-no.
              </p>
              <div className="study-image-text">
                <img src={info1} style={{ width: "40%" }} />
                <div className="image-text-content">
                  <p className="image-text-title">
                    🧑‍💼 Stakeholder’s Preference: All-or-None
                  </p>
                </div>
              </div>
              <p className="study-text">
                However, I discovered that{" "}
                <span className="theme-green">~70% of members</span> chose the
                partial coverage option because it offered more flexibility.
                Therefore, I respectfully offered two alternative methods that
                had the{" "}
                <span className="theme-green">simplicity of a yes-or-no</span>{" "}
                while{" "}
                <span className="theme-green">
                  maintaining the customization
                </span>{" "}
                that members preferred.
              </p>
              <div className="study-image-text">
                <img src={info2} style={{ width: "30%" }} />
                <div className="image-text-content">
                  <p className="image-text-title">
                    ✅ My Recommendation: Two-step Decision
                  </p>
                </div>
              </div>
              <div className="study-image-text">
                <img src={info3} style={{ width: "30%" }} />
                <div className="image-text-content">
                  <p className="image-text-title">
                    🔀 Alternative Recommendation: Customized Selection
                  </p>
                </div>
              </div>
              <p className="study-text">
                Ultimately, my team, stakeholders, and I preferred option 1 due
                to its{" "}
                <span className="theme-green">clarity and intuitive flow</span>.
                This approach also put the member in control and directly
                supports the goal of Financial Wellness.
              </p>
              <p className="study-text">
                However, the greyed out checkbox that implied that OPA
                inherently included “Electronic ACH, Bill Payments....” was not
                intuitive for less tech-savvy audiences and may be frustrating.
                This was the intersection between the clarifying information and
                decision-making process. Because we already clarified what OPA
                may cover earlier, it was{" "}
                <span className="theme-green">
                  redundant to clarify it again.
                </span>
              </p>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Final Mockup</p>
              <p className="study-text">
                After 48 hours of rapid iteration between and during
                back-to-back meetings, I finalized the prototype that was clear,
                informative two-step guided flow that addressed member
                confusion, was legally compliant, and aligned with RCU’s core
                values.
              </p>
              <div className="centered-image">
                <img src={rcuFinal} />
              </div>
            </div>
          </div>
          <hr className="study-divider theme-green" />
          <div className="study-section" id="reflections">
            <h2 className="study-subtitle theme-green">REFLECTIONS</h2>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Results & Takeaways</p>
              <p className="study-text">
                The final design was approved by all senior leadership
                (including the CEO, CTO, and CAO) and is currently live in their
                onboarding flow. This, and some other adjustments I made to
                onboarding, led to a{" "}
                <span className="theme-green">
                  87% decrease in member complaints, 38% increase in user
                  completion rates
                </span>
                , and{" "}
                <span className="theme-green">
                  reduced friction for over 5k monthly users
                </span>{" "}
                going through the onboarding process.
              </p>
              <div
                className="study-image-text"
                style={{ alignItems: "flex-start" }}
              >
                <div className="image-text-content">
                  <p className="image-text-title">
                    ⏱️ Time and Priority Management
                  </p>
                  <p className="image-text-description">
                    This role taught me to{" "}
                    <span className="theme-green">
                      iterate efficiently under pressure
                    </span>
                    . I learned to use smart shortcuts—like{" "}
                    <span className="theme-green">design systems</span> and
                    components—to accelerate timelines. When my workload grew
                    with competing tasks, I learned to{" "}
                    <span className="theme-green">ruthlessly prioritize</span>,
                    ensuring I could deliver high-quality work on sudden,
                    high-priority projects. I also learned to{" "}
                    <span className="theme-green">
                      trust my design instincts
                    </span>{" "}
                    when a fully-fleshed-out sprint wasn't feasible.
                  </p>
                </div>
                <div className="image-text-content">
                  <p className="image-text-title">
                    👥 Collaboration & Checking Bias
                  </p>
                  <p className="image-text-description">
                    This project was an exercise in deep collaboration. I
                    learned to proactively translate{" "}
                    <span className="theme-green">
                      competing and complex requirements from multiple teams
                    </span>{" "}
                    into a simple interface. Maintaining{" "}
                    <span className="theme-green">constant communication</span>{" "}
                    pushed me to iterate quickly and avoid attachment to one
                    solution. My team was also crucial in helping me{" "}
                    <span className="theme-green">check my biases</span>,
                    particularly on accessibility (WCAG) and compliance, which
                    pushed me to think more inclusively.
                  </p>
                </div>
              </div>
            </div>
            <div className="study-subsubsection">
              <p className="study-subsubtitle">Looking Back</p>
              <p className="study-text" style={{ marginBottom: "60px" }}>
                I learned so much from iterating with so many
                perspectives. Next time, I would try to get all of them in{" "}
                <span className="theme-green">a single kickoff workshop</span>{" "}
                to create a 'list of priorities.' We could have ranked our goals
                (e.g., 1. Legal Compliance, 2. Member Clarity, 3. Speed to
                Launch). This shared document would have helped us{" "}
                <span className="theme-green">
                  evaluate every design decision against the same goals
                </span>
                , making the iteration process even more efficient.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Redwood;
