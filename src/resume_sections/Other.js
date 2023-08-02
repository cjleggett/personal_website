import React from "react";
import "../App.css";
import esp_photo from "../images/running.jpeg";
import snow_sit from "../images/snow_sit.JPG";
import { Image } from "react-bootstrap";

export default function Other() {
  return (
    <div>
      <section>
        <h2>Fun</h2>
        <br id="vol" />
        <Image src={esp_photo} className="im-right" thumbnail />
        <div className="content">
          <h3>Puentes de Esperanza</h3>
          <p>
            I spent the 2020-2021 school year working as a volunteer teacher at
            Puentes de Esperanza, a small school in the Dominican Republic.
            While I was there, I learned a lot, made a lot of new friends, and:
          </p>
          <ul>
            <li>
              Taught science, math, and geography classes to students aged 5-16
              with varying levels of English
            </li>
            <li>
              Assisted in construction and maintenance projects on school
              grounds
            </li>
          </ul>

          <br />
          <br />
          <br />
          <br />

          <h3>Sports</h3>
          <Image src={snow_sit} className="im-right" thumbnail />
          <p>
            I've always loved participating in sports, although currently I'm
            sidelined by a pretty bad soccer injury. I recently had three
            surgeries done on my knee, and I'm working my way back toward full
            fitness.{" "}
          </p>
          <ul>
            <li>
              Soccer: I love both playing and watching soccer, especially when
              Liverpool's winning!
            </li>
            <li>
              Running: I really love running, especially long, slow runs with
              friends. My favorite social media app is probably Strava!
            </li>
            <li>
              Skiing: I've been skiing for as long as I can remember, and in
              recent years I've enjoyed transitioning to more and more nordic.
            </li>
          </ul>

          <br />
          <h3>Other Interests</h3>
          <ul>
            <li>
              Books: I really enjoy reading, especially memoirs, short stories,
              and science fiction. Some of my favorites are Never Let Me Go by
              Ishiguro, The Glass Castle by Jeannette Walls, and Exhalation by
              Ted Chiang
            </li>
            <li>
              Music: I like a lot of different types of music, but some of my
              favorites are The Beths, Lucy Dacus, Japanese Breakfast, and
              Slaughter Beach, Dog
            </li>
            <li>
              Crosswords: I've been trying to improve my crossword game, and
              right now I can usually do the NYT Monday-Wednesday, but I still
              have a little ways to go on the other days.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
