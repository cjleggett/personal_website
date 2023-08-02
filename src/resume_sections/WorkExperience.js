import React from 'react';
import '../App.css';
import teaching_photo from "../images/teaching.jpg";
import lawn_photo from "../images/lawn.JPG";
import qc from "../images/qc.png";
import {Image} from 'react-bootstrap';


class WorkExperience extends React.Component {
  render (){
    return(
      <section>
            <h2>Work</h2>
            <div className="content">
              <h3>QuantCo (2022-)</h3>
              <Image src={qc} className="im-right"  thumbnail />
              <p>I started working at QuantCo as an intern for the summer of 2022 in Berlin, and I've worked their full-time in Boston since September 2023. During my time there, I've:</p>
              <ul>
                <li>Developed an internal conda package to aid in the comparison between two tables housed in SQL databases</li>
                <li>Automated monitoring of client-owned control table to check data load status and notify relevant parties in case of an error.</li>
                <li>Led development of a ranking system for single- or multi-player games including automated game entry and score reporting with a SlackBot.</li>
              </ul>

              <br/>

              

              
              <h3>CS50 (2019-2022)</h3>
              <p>I worked for CS50 in various roles including head teaching fellow, head course assistant, and summer intern. Some things I did while there:</p>
              <ul>
                <li>Created content and exercises for web design and artificial intelligence used by other teaching fellows</li>
                <li>Assisted in course logistics including hiring 10+ new course assistants, scheduling office hours, and mentoring new teaching staff.</li>
                <li>Held weekly sections for 80-100 students, and office hours with 5-10 students</li>
              </ul>

              <br/>

              <Image src={teaching_photo} className="im-right"  thumbnail />
              <h3>Economics 1123 (2023)</h3>
              <p>I worked as a course assistant for an econometrics class during my senior spring, and had a lot of fun both teaching and creating a new Python track for the course! Some of my jobs included:</p>
              <ul>
                <li>Writing problem set handouts and solutions in Python, where previously they had only been in R and Stata.</li>
                <li>Taught a section, graded student work, and held office hours weekly.</li>
                <li>Held a review session and exam-walkthrough to hel students prepare for the final exam.</li>
              </ul>

              <br/>

              <h3>FEMA (2021)</h3>
              <p>I spent the summer of 2021 as a data science intern for the federal emergency management agency. While there, I:</p>
              <ul>
                <li>Combined FEMA household grant data and Census community survey data using R to compare application rates between different age groups.</li>
                <li>Used departmental employment data to compile reports on employee turnover using R for the Chief of Human Resources for the Office of Response and Recovery</li>
              </ul>
              <br/>
              <h3>Ivy Insights (2020-2021)</h3>
              <p>I worked with Ivy Insights to create a customer-facing dashboard for the Texas-based advertising firm TechPonte. More specifically, I:</p>
              <ul>
                <li>Wrote scripts to pull data continuously from several source APIs and store that data in Cloud Firestore</li>
                <li>Used Node.js and Express to launch a secure API to be accessed by frontend engineer</li>
                <li>Compiled comprehensive documentation to ensure smooth transition for future developers</li>
              </ul>
              <br/>
              <h3>Lazarus Enterprises (2019)</h3>
              <p>I worked on a small team at Lazarus to improve healthcare outcomes using machine learning. A few of the tasks I worked on there were:</p>
              <ul>
                <li>Building image classification models using AWS servers using Pytorch, TensorFlow, and H20</li>
                <li>Launching APIs using Flask and Digital Ocean servers</li>
                <li>Creating an internal error-logging application using React and Google Firebase</li>
              </ul>
              <br/>

              <h3>Other Work</h3>
              <Image src={lawn_photo} className="im-right"  thumbnail />
              <p>While the above jobs are more relevant to my career, I've also had a lot of fun taking on other jobs that are a little more out there!</p>
              <ul>
                <li>Leggett Lawn Care: In high school, I ran my own lawncare business where I ended up gaining more than twenty clients!</li>
                <li>Gunstock Mountain Resort and Woodstock Nordic Center: I spent 5 years working as a ski instructor--first at Gunstock teaching alpine skiing to 4-6 year-olds, and then at the Woodstock Nordic Center where I taught nordic skiing to students of all ages!</li>
              </ul>

</div>
             </section>
    );
  }
}

export default WorkExperience;