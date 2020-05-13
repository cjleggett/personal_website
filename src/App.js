import React from 'react';
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div>
         <div class="content">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="tutoring.html">Tutoring</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="resume.html">Resume</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.html">Get in Touch</a>
              </li>
          </ul>
        </div>
      </nav>

     
        <div class="content-inside">
          Hello, World
        </div>
      </div>

      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <a href="index.html" class="col-3">Home</a>
        <a href="tutoring.html" class="col-3">Tutoring</a>
        <a href="resume.html" class="col-3">Resume</a>
        <a href="contact.html" class="col-3">Contact</a>
        <a href="#navbar" id="toplink" class="col-2">Back To Top</a>
    </footer>
    </div>
    );
  }
}

export default App;
