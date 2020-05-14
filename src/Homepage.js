import React from 'react';
import './App.css';
import {Jumbotron, Button, Card} from 'react-bootstrap';


class Homepage extends React.Component {
  render (){
  return(
    <div className="centered">
      <Jumbotron>
        <h1>Hi, I'm Connor.</h1>
        <p className="centered">
          I'm currently a student at Harvard College studying Statistics and Computer Science with a passion for using Data and Education to make the world a better place.  
        </p>
        <p className="centered">
          <Button  variant="secondary" onClick={e => this.props.switchPage(e, "resume")}>Learn More</Button>
        </p>
      </Jumbotron>


      <Card onClick={e => this.props.switchPage(e, "resume", "education")} bg="dark" style={{ width: '18rem' }}>
        <Card.Header>Education</Card.Header>
        <Card.Body id="edu" className="card-body">
        </Card.Body>
      </Card>
      <Card onClick={e => this.props.switchPage(e, "resume", "work")}bg="dark" style={{ width: '18rem' }}>
        <Card.Header>Experience</Card.Header>
        <Card.Body id="exp" className="card-body">
        </Card.Body>
      </Card>

      <Card onClick={e => this.props.switchPage(e, "resume", "acts")}bg="dark" style={{ width: '18rem' }}>
        <Card.Header>Activities</Card.Header>
        <Card.Body id="acts-card" className="card-body">
        </Card.Body>
      </Card>

    </div>
  )

  }
    
}

export default Homepage;