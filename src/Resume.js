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
    const juni_link = <a href="https://junilearning.com/" onClick={e => this.props.externalLink(e, "https://junilearning.com/")} ><b>Juni Learning</b></a>
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
                    <li ><a  href="#teach">Teaching/Education</a></li>
                    <li><a href="#other">Other Work</a></li>
                </ul>
            </li>
            <li><a href="#acts">Other Activities</a>
                <ul>
                    <li><a href="#vol">Volunteering</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                </ul>
            </li>
            <li><a href="#now">What I'm Doing Now</a></li>
            <li><a href="#download">Resume Download</a></li>
        </ol>
    </nav>
    <div id="resume_content">
        <h1>About Me</h1>
        <br id="education"/><br/><br/>
        <section>
            <h2>Education</h2>
            <Image src={roof_photo} className="im-left" fluid thumbnail />
            <p>During my time at Harvard, I've been involved in a number of exciting extracurriculars, and met some really amazing people. Here's a list of what I believe is my more relevant coursework:</p>
            <ul>
              <li><b>Computer Science:</b> I have completed an Introduction to Computer Science, a class on Abstraction and Design, an Introduction to the Theory of Computer Science, and a course on Data Structures and Algorithms.</li>
              <li><b>Statistics:</b> During my sophomore year, I was introduced to the field of statistics, taking classes on both probability and statistical inference, where I gained a strong foundation in how we quantify uncertainty and estimate unknown values.</li>
              <li><b>Mathematics:</b>I've taken classes on differential equations, multivariate calculus, and linear algebra.</li>
              <li><b>Economics:</b> So far, I've taken an introduction to microeconomic theory, as well as a course on using big data to solve social and economic problems, where I worked with large datasets in R, using regression, visualization, and machine learning techniques to gain insights.</li>
            </ul>
        </section>
        <br id="skills"/><br/><br/>
        <section>
            <h2>Technical Skills</h2>
            <Image src={coding_photo} className="im-right" fluid thumbnail />
            <ul>
              <li> <b>Programming Languages</b>
                <ul>
                  <li><b>Python:</b> I've been working with Python for four years, and I have experience using packages such as Pandas, PyTorch, TensorFlow, Flask, and Django.</li>
                  <li><b>R:</b> I feel confident using R for statistical analysis and simulation</li>
                  <li><b>Java:</b> I've taken AP Computer Science A, taught in Java, and tutored in that same course, so I have a firm foundation in the language</li>
                  <li><b>OCaml:</b> Taking a course taught in this language has given me an appreciation for functional programming that I've applied to other languages</li>
                  <li><b>C/C++:</b> I've learned the basics of these languages in two of my classes.</li>
                </ul>
              </li>
              <li> <b>Web Development</b>
                <ul>
                  <li><b>HTML/CSS </b></li>
                  <li><b>JavaScript</b></li>
                  <li><b>React: </b>I used React and Google Firebase to create an internal error-handling application as an intern in 2019, and to create this website!</li>
                  <li><b>Django:</b> I was a teaching fellow in the spring of 2020 for a course on web development that was based in Django.</li>
                  <li><b>Flask:</b> I've used Flask both as the backend for a website and to create standalone APIs.</li>
                </ul>
              </li>
              <li><b>Version Control:</b> Git and Github</li>
            </ul>
        </section>
        <br id="work"/><br/><br/>
        <section>
            <h2>Work Experience</h2>
            <br id="software"/><br/><br/>
            <section>
            <h3>Software Engineering</h3>
            <Image src={lz_photo} className="im-right"  thumbnail />
              <ul>
                <li><b>Lazarus Enterprises: </b>I spent the summer of 2019 as a backend intern for the healthcare technology startup {lz_link}. While there, I worked on applications that help users assess their own risk of skin cancer and heart diseases by:
                <ul>
                  <li>Building machine learning models on AWS servers using Pytorch, TensorFlow, and H2O</li>
                  <li>Launching APIs using Flask and Digital Ocean servers</li>
                  <li>Creating an internal error-logging application using React</li>
                </ul>
                </li>
              </ul>
            </section>
            <br/><br/><br/>
            <br id="teach"/><br/><br/>
            <section>
              
              <Image src={teaching_photo} className="im-left"  thumbnail />
              <h3>Teaching</h3>
              <ul>
                <li><b>CS50: </b>During the first semester of my sophomore year, I was a teaching fellow for an introduction to computer science class that taught basic CS concepts in Scratch, C, Python, an Lua. As a teaching fellow, I planned for and led weekly interactive sections with 20-25 students, held weekly office hours and tutorials to assist students with problem sets, and previewed new course material and offered suggestions for improvements</li>
                <li><b>Harvard Extension School: </b> During the first semester of my sophomore year, I was a teaching fellow for an introduction to computer science class that taught basic CS concepts in Scratch, C, Python, an Lua. As a teaching fellow, I planned for and led weekly interactive sections with 20-25 students, held weekly office hours and tutorials to assist students with problem sets, and previewed new course material and offered suggestions for improvements</li>
                <li>{juni_link}: During the first semester of my sophomore year, I was a teaching fellow for an introduction to computer science class that taught basic CS concepts in Scratch, C, Python, an Lua. As a teaching fellow, I planned for and led weekly interactive sections with 20-25 students, held weekly office hours and tutorials to assist students with problem sets, and previewed new course material and offered suggestions for improvements</li>
              </ul>
            </section>
            <br id="other"/><br/><br/>
            <Image src={lawn_photo} id="lawn" className="im-right"  thumbnail />
            <section>
              <h3>Other Work</h3>
              <ul>
                <li><b>Ski Instruction: </b> I've worked as a ski instructor (a mix of alpine and nordic) every winter since 2015.</li>
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
              
              <Image src={pbha_photo} className="im-left"  thumbnail />
              <h3>Volunteer Work</h3>
              <ul>
                <li><b>Recent Immigrant Term-Time Enrichment (RITE): </b>Since coming to college, I have volunteered as a tutor at RITE, an organization within the {pbha_link} (PBHA), a large student-run service organization on campus. During my time with RITE, I have assisted students learning English as a second language with homework, test preparation, and conversational English. I was a co-director of the group from 2019 to 2020, so I assisted in recruiting, training, and coordinating other tutors and attended PBHA cabinet meetings.</li>
                </ul>
              <br/><br/><br/>
            </section>
            <br id="hobbies"/><br/><br/>
            <section>
              <h3>Hobbies</h3>
              <Image src={snow_sit} className="im-right"  thumbnail />
              <ul>
                <li><b>Running: </b>I've run with the Harvard College Running Club throughout my time on campus, and it's helped me to meet some incredible people and find a community on campus. I'm currently serving as the Club's treasurer, where I am responsible for applying for grants, collecting meet fees from other clubs, and creating a budget for the year.</li>
                <li><b>Soccer: </b>I love both playing and watching soccer, especially when Liverpool's winning! </li>
                <li><b>Skiing: </b>Growing up in New Hampshire, I've been skiing for as long as I can remember. It's a great way to get outside during the winter, and nothing beats speeding downhill through the glades or skating down fresh corduroy at a nordic area.  </li>
              </ul>
            </section>
        </section>
        <br id="now"/><br/><br/>
        <Image src={cs50_photo} className="im-right"  thumbnail />
        <section>
          <VizSensor onChange={(isVisible) => this.inView(isVisible, "now")}>
            <h2>What I'm Doing Now</h2>
          </VizSensor>
            
            This summer, I'm working with the CS50 team where I'll be teaching a few summer school classes and helping with curriculum development for future versions of the course. I'm working remotely this summer, so I'll also be running, biking, hiking, and spending time with my family, dog, and two cats!
        </section>
        <br id="download"/><br/><br/>
        <section>
            <h2>Resume Download</h2>
  <p>If you would like to keep a copy of my resume for your files, you can download a single-page verison {resume_link}. </p>
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
