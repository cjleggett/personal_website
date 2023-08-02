import React from "react";
import "../App.css";
import roof_photo from "../images/sc_roof.JPG";
import { Image } from "react-bootstrap";

class Education extends React.Component {
  render() {
    return (
      <section>
        <h2>Education</h2>
        <Image src={roof_photo} className="im-right" thumbnail />
        <div className="content">
          <p>
            In May 2023, I graduated from Harvard with a Bachelor of Arts cum
            laude in Computer Science with a secondary in Economics. Here are
            some of the more relevant classes:
            <ul>
              <li>
                <b>Computer Science:</b>
                <ul>
                  <li>CS 124: Data Structures and Algorithms</li>
                  <li>CS 109a: Data Science</li>
                  <li>CS 51: Abstraction and Design in Computer Science</li>
                  <li>CS 136: Economics and Computation</li>
                  <li>PHYSCI 70: Introduction to Digital Fabrication</li>
                </ul>
              </li>
              <li>
                <b>Statistics:</b>
                <ul>
                  <li>STAT 110: Probability</li>
                  <li>STAT 111: Statistical Inference</li>
                  <li>
                    STAT 91R: Independent Research on Soccer Data Analytics
                  </li>
                </ul>
              </li>
              <li>
                <b>Mathematics:</b>
                <ul>
                  <li>MATH 21A: Multivariable Calculus</li>
                  <li>MATH 21B: Linear Algebra</li>
                </ul>
              </li>
              <li>
                <b>Economics:</b>
                <ul>
                  <li>ECON 50: Big Data in Economics</li>
                  <li>ECON 1123: Econometrics</li>
                  <li>ECON 1011a: Intermediate Microeconomics</li>
                </ul>
              </li>
            </ul>
          </p>
        </div>
      </section>
    );
  }
}

export default Education;
