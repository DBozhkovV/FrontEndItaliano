import React from 'react'
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import FormLogin from './FormLogin.js';
import FormSignUp from './FormSignUp.js';

const NavbarComponent = () => {
  const [LogInShow, setLogInShow] = React.useState(false);
  const [SignUpShow, setSignUpShow] = React.useState(false);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="companyName" href="#home">
          <img
            className="opelLogo"
          />{' '} Italiano Dealership</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link onClick={() => setLogInShow(true)}>Login</Nav.Link>
            <FormLogin show = {LogInShow} onHide={() => setLogInShow(false)}/>
          <Nav.Link onClick={() => setSignUpShow(true)}>Sign Up</Nav.Link>
            <FormSignUp show={SignUpShow} onHide={() => setSignUpShow(false)}/>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent