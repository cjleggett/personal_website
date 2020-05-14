import React from 'react';
import './App.css';
import { Navbar, Nav} from 'react-bootstrap';
import ContactForm from "./ContactForm";
import Homepage from "./Homepage";
import Resume from "./Resume";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_page: "home"
    };
  }


  render() {
    var page_content = "";
    if (this.state.current_page === "contact"){
      page_content = <ContactForm />
    } 
    else if (this.state.current_page === "home"){
      page_content = <Homepage switchPage={this.switchPage} />
    }
    else {
      page_content = <Resume />
    }
    

    return (
      <div>
        <Navbar id="top-nav" class="nav" bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand onClick={e => this.switchPage(e, "home")} href="#">Connor Leggett</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link onClick={e => this.switchPage(e, "resume")}>Resume</Nav.Link>
              <Nav.Link onClick={e => this.switchPage(e, "contact")}>Contact</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <div id="content">{page_content}</div>

        <div class="mobileShow">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </div>

        <Navbar sticky="bottom" class="nav" bg="dark" variant="dark" expand="lg">
          <Navbar.Brand onClick={e => this.switchPage(e, "Home")} href="#">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={e => this.switchPage(e, "contact")}>Contact</Nav.Link>
              <Nav.Link onClick={e => this.externalLink(e, "https://github.com/cjleggett")}href="#">GitHub</Nav.Link>
              <Nav.Link onClick={e => this.externalLink(e, "https://www.linkedin.com/in/connor-leggett")}href="#">Linkden</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Back To Top</Nav.Link>
            </Nav>
        </Navbar>
      </div>
    );
  }

  switchPage = (e, newpage) =>{
    e.preventDefault();
    this.setState({
      current_page: newpage
    })
    return false;
  }

  externalLink = (e, newpage) => {
    e.preventDefault();
    window.open(newpage, "_blank");
  }
}

export default App;
