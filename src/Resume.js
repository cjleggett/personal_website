import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import VizSensor from "react-visibility-sensor";
import "./App.css";
import "./index.css";
import roof_photo from "./images/sc_roof.JPG";
import coding_photo from "./images/code.jpeg";

import cs50_photo from "./images/cs50.jpg";
import pbha_photo from "./images/pbha.jpg";

import { Image } from "react-bootstrap";
import Education from "./resume_sections/Education";
import WorkExperience from "./resume_sections/WorkExperience";
import Other from "./resume_sections/Other";

export default function Resume() {
  const { ref: education, inView: educationIsVisible } = useInView();
  const { ref: work, inView: workIsVisible } = useInView();
  const { ref: fun, inView: funIsVisible } = useInView();
  const [current, setCurrent] = useState("");

  const getCurrent = () => {
    const checks = [workIsVisible, educationIsVisible, funIsVisible];
    const strings = ["work", "education", "fun"];

    if (current !== "" && checks[strings.indexOf(current)]) {
      return current;
    } else {
      for (let i = 0; i < 3; i++) {
        if (checks[i]) {
          setCurrent(strings[i]);
          return current;
        }
      }
    }
  };

  return (
    <div>
      <main>
        <nav className="section-nav">
          <ol>
            <li>
              <a
                href="#work"
                className={
                  getCurrent() === "work"
                    ? "nav-item-visible"
                    : "nav-item-hidden"
                }
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#education"
                className={
                  getCurrent() === "education"
                    ? "nav-item-visible"
                    : "nav-item-hidden"
                }
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#acts"
                className={
                  getCurrent() === "fun"
                    ? "nav-item-visible"
                    : "nav-item-hidden"
                }
              >
                Fun
              </a>
            </li>
          </ol>
        </nav>
        <div id="resume_content">
          <h1>Get to know me</h1>
          <div ref={work}>
            <br id="work" />
            <br />
            <br />
            <WorkExperience />
          </div>
          <div ref={education}>
            <br id="education" />
            <br />
            <br />
            <Education />
          </div>
          <div ref={fun}>
            <br id="acts" />
            <Other />
          </div>
        </div>
      </main>
    </div>
  );
}

// render (){
//   const resume_link = <a onClick={e => this.props.externalLink(e, require("./images/Resume.pdf"))} href={require("./images/Resume.pdf")}>here</a>
//   const lz_link = <a href="https://www.lazarusai.com/" onClick={e => this.props.externalLink(e, "https://www.lazarusai.com/")} >Lazarus Enterprises</a>
//   const pbha_link = <a href="http://pbha.org/" onClick={e => this.props.externalLink(e, "http://pbha.org/")} >Phillips Brooks House Association</a>
// return(

// );
// }

//   inView = (isVisible, id) => {
//     console.log(isVisible);

//     var current = this.state;
//     current[id] = isVisible;

//     this.setState({
//       current
//     })

//     console.log(this.state)

//   }

// }
