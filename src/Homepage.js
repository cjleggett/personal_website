import React from 'react';
import './App.css';
import {Jumbotron, Button, Card} from 'react-bootstrap';


class Homepage extends React.Component {
  render (){
  return(
    <div class="centered">
      <Jumbotron>
        <h1>Hi, I'm Connor.</h1>
        <p class="centered">
          I'm currently a student at Harvard College studying Statistics and Computer Science with a passion for using Data and Education to make the world a better place.  
        </p>
        <p class="centered">
          <Button  variant="secondary" onClick={e => this.props.switchPage(e, "resume")}>Learn more</Button>
        </p>
      </Jumbotron>


      <Card onClick={e => this.props.switchPage(e, "resume")} bg="dark" style={{ width: '18rem' }}>
        <Card.Header>Education</Card.Header>
        <Card.Body id="edu" class="card-body">
        </Card.Body>
      </Card>
      <Card onClick={e => this.props.switchPage(e, "resume")}bg="dark" style={{ width: '18rem' }}>
        <Card.Header>Experience</Card.Header>
        <Card.Body id="exp" class="card-body">
        </Card.Body>
      </Card>

    </div>
  )

  }
    
}

export default Homepage;