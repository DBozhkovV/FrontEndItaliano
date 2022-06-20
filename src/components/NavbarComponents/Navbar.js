import React from 'react'
import { Navbar,Nav,Container, Form, FormControl} from 'react-bootstrap';
import FormLogin from './FormLogin.js';
import FormSignUp from './FormSignUp.js';

const NavbarComponent = () => {
  const [LogInShow, setLogInShow] = React.useState(false);
  const [SignUpShow, setSignUpShow] = React.useState(false);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="companyName" href="http://localhost:3000">
          <img
            className="opelLogo"
          />{' '} Italiano Dealership</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="justify-content-end" style={{ width: "100%" }}>
          <Nav.Link href="http://localhost:3000/news">News</Nav.Link>
          <Nav.Link onClick={() => setLogInShow(true)}>Login</Nav.Link>
            <FormLogin show = {LogInShow} onHide={() => setLogInShow(false)}/>
          <Nav.Link onClick={() => setSignUpShow(true)}>Sign Up</Nav.Link>
            <FormSignUp show={SignUpShow} onHide={() => setSignUpShow(false)}/>
            <Nav.Link href="http://localhost:8000/admin">Manage Cars</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          {/* <Button variant="outline-success">Search</Button> */}
        </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent