import React from 'react';
import './App.css';
import harvard_photo from "./images/harvard.jpg";
import coding_photo from "./images/code.jpeg";
import lz_photo from "./images/lz.png";
import cs50_photo from "./images/cs50.jpg";
import extension_photo from "./images/extension.jpg";
import juni_photo from "./images/juni.png";
import lawn_photo from "./images/lawn.JPG";
import hcrc_photo from "./images/hcrc.jpeg";
import pbha_photo from "./images/pbha.jpg";
import {Image} from 'react-bootstrap';


class Resume extends React.Component {

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
                    <li><a href="#lz">Lazarus Enterprises</a></li>
                    <li ><a  href="#cs50">CS50</a></li>
                    <li ><a href="#ext">Harvard Extension School</a></li>
                    <li><a href="#juni">Juni Learning</a></li>
                    <li><a href="#other">Other Work</a></li>
                </ul>
            </li>
            <li><a href="#acts">Other Activities</a>
                <ul>
                    <li><a href="#hcrc">Harvard College Running Club</a></li>
                    <li><a href="#rite">Recent Immigrant Term-Time Enrichment</a></li>
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
            <div className="im_contain"><Image src={harvard_photo} className="im" fluid thumbnail /></div>
            <p>I graduated from Gilford High School in New Hampshire in 2018, and since then, I've been a student at Harvard College. During my time there, I've taken many courses related to computer science and statistics, been involved in a number of exciting extracurriculars, and met some really amazing people. Here's a list of what I believe is my more relevant coursework:</p>
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
            <div className="im_contain"><Image src={coding_photo} className="im" fluid thumbnail /></div>
            <ul>
              <li> <b>Programming Languages</b>
                <ul>
                  <li><b>Python:</b> This is definitely the language I'm strongest in, as I've been working with it for around four years now. I have experience using packages such as Pandas, PyTorch, TensorFlow, Flask, and Django.</li>
                  <li><b>R:</b> I've now used R quite a bit in my statistics and economics classes, and I feel fairly comfortable with the language.</li>
                  <li><b>Java:</b> I've taken AP Computer Science A, taught in Java, and tutored in that same course, so I have a firm foundation in the language</li>
                  <li><b>OCaml:</b> While it's been a while since I've used this language, it's given me an appreciation for functional programming that I've applied to other languages</li>
                  <li><b>C/C++:</b> While I'm familiar with the basics of these two languages, I haven't worked with them quite enough to call myself comfortable.</li>
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
            <br id="lz"/><br/><br/>
            <section>
              <h3>Lazarus Enterprises</h3>
              <Image src={lz_photo} className="im-right"  thumbnail />
              <p>I spent the summer of 2019 as a backend intern for the healthcare technology startup {lz_link}. While there, I worked on applications that help users assess their own risk of skin cancer and heart diseases by: </p>
              <ul>
                <li>Building machine learning models on AWS servers using Pytorch, TensorFlow, and H2O</li>
                <li>Launching APIs using Flask and Digital Ocean servers</li>
                <li>Creating an internal error-logging application using React</li>
              </ul>
            </section>
            <br id="cs50"/><br/><br/>
            <section>
              <h3>CS50</h3>
              <div className="im_contain"><Image src={cs50_photo} className="im" fluid thumbnail /></div>
              <p>During the first semester of my sophomore year, I was a teaching fellow for an introduction to computer science class that taught basic CS concepts in Scratch, C, Python, an Lua. As a teaching fellow, I:</p>
              <ul>
                <li>Planned for and led weekly interactive sections with 20-25 students</li>
                <li>Held weekly office hours and tutorials to assist students with problem sets</li>
                <li>Previewed new course material and offered suggestions for improvements</li>
              </ul>
            </section>
            <br id="ext"/><br/><br/>
            <section>
              <h3>Harvard Extension School</h3>
              <Image src={extension_photo} className="im-right"  thumbnail />
              <p>During my sophomore spring, I worked as a teaching fellow for CSCI E-33A, a course on web design taught at the Harvard Extension School. During this time, I taught biweekly sections over Zoom, graded student projects, and held office hours to provide advice on design of in-class and personal projects.</p>
            </section>
            <br id="juni"/><br/><br/>
            <section>
              <h3>Juni Learning</h3>
              <Image src={juni_photo} className="im-left"  thumbnail />
              <p>From the fall of 2018 until the Summer of 2019, I worked as a tutor for Juni learning where I instructed middle and high school students in the basics of computer science in Python and Java and held introductory classes for potential students where I made recommendations about course placement. </p>
            </section>
            <br id="other"/><br/><br/>
            <section>
              <h3>Other Work</h3>
              <Image src={lawn_photo} className="im-right"  thumbnail />
              <p>In addition to my computer science related jobs, I've also worked as a ski instructor (a mix of alpine and nordic) for the past five years, and in high school, I ran my own lawncare business where I gained more than twenty clients and was able to hire a couple people to work with me.</p>
            </section>
        </section>
        <br id="acts"/><br/><br/>
        <section>
            <h2>Other Activities</h2>
            <br id="hcrc"/><br/><br/>
            <section>
              <h3>Harvard College Running Club</h3>
              <Image src={hcrc_photo} className="im-right"  thumbnail />
              <p>I've run with HCRC throughout my time in college, and it's helped me to meet some incredible people and find a community on campus. I'm currently serving as the Club's treasurer, where I am responsible for applying for grants, collecting meet fees from other clubs, and creating a budget for the year.</p>
            </section>
            <br id="rite"/><br/><br/>
            <section>
              <h3>Recent Immigrant Term-Time Enrichment (RITE)</h3>
              <Image src={pbha_photo} className="im-left"  thumbnail />
              <p>Since coming to college, I have volunteered as a tutor at RITE, an organization within the {pbha_link} (PBHA), a large student-run service organization on campus. During my time with RITE, I have assisted students learning English as a second language with homework, test preparation, and conversational English. I was a co-director of the group from 2019 to 2020, so I assisted in recruiting, training, and coordinating other tutors and attended PBHA cabinet meetings.</p>
            </section>
            <br id="hobbies"/><br/><br/>
            <section>
              <h3>Hobbies</h3>
              <p>…</p>
            </section>
        </section>
        <br id="now"/><br/><br/>
        <section>
            <h2>What I'm Doing Now</h2>
            <p>…</p>
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
    
}

export default Resume;
