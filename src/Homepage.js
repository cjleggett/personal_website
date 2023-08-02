import React from "react";
import "./App.css";
import { Jumbotron, Button, Card } from "react-bootstrap";

class Homepage extends React.Component {
  render() {
    return (
      <div className="centered">
        <Jumbotron>
          <h1>Hi, I'm Connor.</h1>
          <p className="centered">
            I'm a data scientist and software engineer interested in finding new
            ways to use data to make the world a better place.
          </p>
          <p className="centered">
            <Button
              variant="secondary"
              onClick={(e) => this.props.switchPage(e, "resume")}
            >
              Learn More
            </Button>
          </p>
        </Jumbotron>

        <Card
          onClick={(e) => this.props.switchPage(e, "resume", "work")}
          bg="dark"
          style={{ width: "18rem" }}
        >
          <Card.Header>Work</Card.Header>
          <Card.Body id="exp" className="card-body"></Card.Body>
        </Card>

        <Card
          onClick={(e) => this.props.switchPage(e, "resume", "education")}
          bg="dark"
          style={{ width: "18rem" }}
        >
          <Card.Header>Education</Card.Header>
          <Card.Body id="edu" className="card-body"></Card.Body>
        </Card>

        <Card
          onClick={(e) => this.props.switchPage(e, "resume", "acts")}
          bg="dark"
          style={{ width: "18rem" }}
        >
          <Card.Header>Fun</Card.Header>
          <Card.Body id="acts-card" className="card-body"></Card.Body>
        </Card>
      </div>
    );
  }
}

export default Homepage;
