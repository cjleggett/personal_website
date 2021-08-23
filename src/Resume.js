import React from 'react';
import VizSensor from 'react-visibility-sensor'
import './App.css';
import roof_photo from "./images/sc_roof.JPG";
import coding_photo from "./images/code.jpeg";
import lz_photo from "./images/lz.png";
import teaching_photo from "./images/teaching.jpg";
import lawn_photo from "./images/lawn.JPG";
import snow_sit from "./images/snow_sit.JPG";
import cs50_photo from "./images/cs50.jpg";
import pbha_photo from "./images/pbha.jpg";
import esp_photo from "./images/running.jpeg"
import {Image} from 'react-bootstrap';


class Resume extends React.Component {
  constructor(props){
    super();
    this.state = {
      "education": false, 
      "skills": false, 
      "work": false, 
      "software": false, 
      "teach": false, 
      "other": false, 
      "acts": false, 
      "vol": false, 
      "hobbies": false, 
      "now": false, 
      "download": false
    }
  }

  render (){
    const resume_link = <a onClick={e => this.props.externalLink(e, require("./images/Resume.pdf"))} href={require("./images/Resume.pdf")}>here</a>
    const lz_link = <a href="https://www.lazarusai.com/" onClick={e => this.props.externalLink(e, "https://www.lazarusai.com/")} >Lazarus Enterprises</a>
    const pbha_link = <a href="http://pbha.org/" onClick={e => this.props.externalLink(e, "http://pbha.org/")} >Phillips Brooks House Association</a>
  return(
    <div>
      <main>
      <nav className="section-nav">
        <ol>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Technical Skills</a></li>
            <li><a href="#work">Work Experience</a>
                <ul>
                    <li><a href="#software">Software Engineering</a></li>
                    <li><a  href="#teach">Teaching/Education</a></li>
                    <li><a href="#other">Other Work</a></li>
                </ul>
            </li>
            <li><a href="#acts">Other Activities</a>
                <ul>
                    <li><a href="#vol">Volunteering</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                </ul>
            </li>
            <li><a href="#download">Resume Download</a></li>
        </ol>
    </nav>
    <div id="resume_content">
        <h1>About Me</h1>
        <br id="education"/><br/><br/>
        <section>
            <h2>Education</h2>
            <Image src={roof_photo} className="im-right" fluid thumbnail />
            I am currently studying statistics and computer science at Harvard College where I am scheduled to graduate in May of 2023. Below are some of the courses I have taken during my time here:
            <ul>
              <li><b>Computer Science:</b>
                <ul>
                  <li>CS 124: Data Structures and Algorithms</li>
                  <li>CS 109: Data Science</li>
                  <li>CS 51: Abstraction and Design in Computer Science</li>
                </ul>
              </li>
              <li><b>Statistics:</b>
                <ul>
                  <li>STAT 110: Probability</li>
                  <li>STAT 111: Statistical Inference</li>
                  <li>STAT 139: Linear Modeling</li>
                </ul>
              </li>
              <li><b>Mathematics:</b>
                <ul>
                  <li>MATH 21A: Multivariable Calculus</li>
                  <li>MATH 21B: Linear Algebra</li>
                </ul>
              </li>
              <li><b>Economics:</b>
                <ul>
                  <li>ECON 50: Big Data in Economics</li>
                  <li>ECON 10: Microeconomics</li>
                </ul>
              </li>
            </ul>
        </section>
        <br id="skills"/><br/><br/>
        <section>
            <h2>Technical Skills</h2>
            <Image src={coding_photo} className="im-left" fluid thumbnail />
            <ul>
              <li><b>Programming Languages: </b> Python (Expert), JavaScript (Proficient), Java (Proficient), R (Proficient), OCaml (Prior Experience), C/C++ (Prior Experience)</li>
              <li><b>Web Development: </b> ExpressJS, Django, React, Flask, HTML/CSS</li>
              <li><b>Development Technologies: </b> Git/GitHub, AWS EC2 Instances, Google Firebase</li>
            </ul>
        </section>
        <br id="work"/><br/><br/><br/><br/><br/>
        <section>
            <h2>Work Experience</h2>
            <br id="software"/><br/><br/>
            <section>
            <h3>Software Engineering and Data Science</h3>
            <Image src={lz_photo} className="im-right"  thumbnail />
              <ul>
                <li><b>Federal Emergency Management Agency - Data Science Intern </b>
                  <ul>
                    <li>Combined FEMA household grant data and Census community survey data using R to compare application rates between different age groups.</li>
                    <li>Used departmental employment data to compile reports on employee turnover using R for the Chief of Human Resources for the Office of Response and Recovery</li>
                  </ul>
                </li>
                <li><b>Ivy Insights - Backend Engineer </b>
                  <ul>
                    <li>Wrote scripts to pull data continuously from several source APIs and store that data in Cloud Firestore</li>
                    <li>Used Node.js and Express to launch a secure API to be accessed by frontend engineer</li>
                    <li>Compiled comprehensive documentation to ensure smooth transition for future developers</li>
                  </ul>
                </li>
                <li><b>Lazarus Enterprises - Backend Intern </b>
                  <ul>
                    <li>Built image classification models using AWS servers using Pytorch, TensorFlow, and H20</li>
                    <li>Launched APIs using Flask and Digital Ocean servers</li>
                    <li>Created internal error-logging application using React and Google Firebase</li>
                  </ul>
                </li>
              </ul>
            </section>
            <br/><br/><br/>
            <br id="teach"/><br/><br/>
            <section>
              <Image src={teaching_photo} className="im-right"  thumbnail />
              <h3>Teaching</h3>
              <ul>
                <li><b>Computer Science 50 at Harvard - Head Course Assistant </b>
                  <ul>
                    <li>Created content and exercises for web design and artificial intelligence used by other teaching fellows</li>
                    <li>Assisted in course logistics including hiring 10+ new course assistants</li>
                    <li>Held weekly sections for 10-20 students, and office hours with 5-10 students</li>
                    <li>Compiled 9 extensive written supplements for lectures on web design</li>
                  </ul>
                </li>
                <li><b>Juni Learning - Instructor</b>
                  <ul>
                    <li>Instructed students in grades 6-10 on programming in Python</li>
                    <li>Conducted introductory classes for students and gave recommendations for class placement</li>
                  </ul>
                </li>
              </ul>
            </section>
            <br id="other"/><br/><br/>
            <Image src={lawn_photo} id="lawn" className="im-left"  thumbnail />
            <section>
              <h3>Other Work</h3>
              <ul>
                <li><b>Ski Instruction: </b> I worked as a ski instructor (a mix of alpine and nordic) every winter from 2015 to 2020.</li>
                <li><b>Lawn Care: </b> In high school, I ran my own lawncare business where I gained more than twenty clients and was able to hire two people to work with me.</li>
              </ul>
            </section>
        </section>
        <br/><br/><br/><br/><br/>
        <br id="acts"/><br/><br/>
        <section>
            <h2>Other Activities</h2>
            <section>
              <br/>
              <br id="vol"/><br/><br/>
              
              <Image src={esp_photo} className="im-right"  thumbnail />
              <h3>Volunteer Work</h3>
              <ul>
                <li><b>Esperanza Project - Teacher </b>
                  <ul>
                    <li>Taught science, math, and geography classes to students aged 5-16 with varying levels of English</li>
                    <li>Assisted in construction and maintenance projects on school grounds</li>
                  </ul>
                </li>
                <li><b>Recent Immigrant Term-Time Enrichment (RITE) - Director </b>
                  <ul>
                    <li>Assisted students in middle and high school who are first or second generation immigrants with test preparation, math and physics homework, and English.</li>
                    <li>Organized volunteer hours and recruited new volunteers</li>
                  </ul>
                </li>
              </ul>
              <br/><br/><br/>
            </section>
            <br id="hobbies"/><br/><br/>
            <section>
              <h3>Hobbies</h3>
              <Image src={snow_sit} className="im-left"  thumbnail />
              <ul>
                <li><b>Running: </b>I've run with the Harvard College Running Club throughout my time on campus, and it's helped me to meet some incredible people and find a community on campus. I'm currently serving as the Club's treasurer, where I am responsible for applying for grants, collecting meet fees from other clubs, and creating a budget for the year.</li>
                <li><b>Soccer: </b>I love both playing and watching soccer, especially when Liverpool's winning! </li>
                <li><b>Skiing: </b>Growing up in New Hampshire, I've been nordic and alpine skiing almost my whole life!</li>
              </ul>
            </section>
        </section>
        <br id="download"/><br/><br/>
        <section>
            <h2>Resume Download</h2>
  <p>If you would like to keep a copy of my resume, you can download a single-page verison {resume_link}. </p>
        </section>
    </div>
    
</main>
    </div>
  )

  

  }

    
  inView = (isVisible, id) => {
    console.log(isVisible);

    var current = this.state;
    current[id] = isVisible;

    this.setState({
      current
    })

    console.log(this.state)

  }

  
    
}

export default Resume;
