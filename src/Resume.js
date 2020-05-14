import React from 'react';
import './App.css';


class Resume extends React.Component {

  render (){
    const resume_link = <a href={require("./images/Resume.pdf")}>here</a>
  return(
    <div>
      <main>
      <nav className="section-nav">
        <ol>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
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
                    <li><a href="#hcs">Harvard Computer Society</a></li>
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
            <p>…</p>
        </section>
        <br id="skills"/><br/><br/>
        <section>
            <h2>Skills</h2>
            <p>…</p>
        </section>
        <br id="work"/><br/><br/>
        <section>
            <h2>Work Experience</h2>
            <br id="lz"/><br/><br/>
            <section>
              <h3>Lazarus Enterprises</h3>
              <p>…</p>
            </section>
            <br id="cs50"/><br/><br/>
            <section>
              <h3>CS50</h3>
              <p>…</p>
            </section>
            <br id="ext"/><br/><br/>
            <section>
              <h3>Harvard Extension School</h3>
              <p>…</p>
            </section>
            <br id="juni"/><br/><br/>
            <section>
              <h3>Juni Learning</h3>
              <p>…</p>
            </section>
            <br id="other"/><br/><br/>
            <section>
              <h3>Other Work</h3>
              <p>…</p>
            </section>
        </section>
        <br id="acts"/><br/><br/>
        <section>
            <h2>Other Activities</h2>
            <br id="hcrc"/><br/><br/>
            <section>
              <h3>Harvard College Running Club</h3>
              <p>…</p>
            </section>
            <br id="hcs"/><br/><br/>
            <section>
              <h3>Harvard Computer Society</h3>
              <p>…</p>
            </section>
            <br id="hobbies"/><br/><br/>
            <section>
              <h3>Hobbies</h3>
              <p>…</p>
            </section>
        </section>
        <br id="now"/><br/><br/>
        <section>
            <h2>Expanders</h2>
            <p>…</p>
        </section>
        <br id="download"/><br/><br/>
        <section>
            <h2>Resume Download</h2>
  <p>If you would like to keep (a small portion of) my resume for your files, you can download a single-page verison {resume_link}. </p>
        </section>
    </div>
    
</main>
    </div>
  )

  }
    
}

export default Resume;
