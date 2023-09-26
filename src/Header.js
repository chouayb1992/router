import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FormAdd} from './FormAdd';
import React from 'react';
import Link from 'react-router-dom';

function Header() {
const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to='/'><h1 style={{color:'green'}}>MovizLand</h1></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Documentary
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Others
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
        <Row>
          <Col xs="auto">
          <Button type="submit" style={{backgroundColor:'black'}} onClick={() => setModalShow(true)}>Add Movie</Button>
          <FormAdd
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
          </Col>
        </Row>
      </Form>

        <Form inline style={{marginLeft:'25px'}}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>

        </Row>
      </Form>
      </Container>
    </Navbar>
  );
}

export default Header;