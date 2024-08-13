import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/city-roots-logo.png";
import { Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function Navigation() {
   return (
      <Navbar bg='light' data-bs-theme='light' className='shadow-sm rounded'>
         <Container fluid>
            <Row className='w-100 align-items-center'>
               <Col xs='auto'>
                  <Navbar.Brand href='/'>
                     <img src={logo} alt='Logo of City Roots' className='img-fluid logo' style={{ width: "200px" }} />
                  </Navbar.Brand>
               </Col>
               <Col xs={5}>
                  <Form className='d-flex'>
                     <Form.Control type='search' placeholder='Search' className='me-2' aria-label='Search' />
                  </Form>
               </Col>
               <Col xs='auto'>
                  <Button variant='outline-secondary' className='d-flex align-items-center me-2'>
                     <Icon.Filter className='me-1' />
                     Filter
                  </Button>
               </Col>
               <Col xs='auto' className='d-flex align-items-center me-2 fw-bold'>
                  <span className='me-2'>Time Zone: EST</span>
                  <span className='me-2'>Time: 21:42</span>
                  <span className='me-2'>Points: 100</span>
               </Col>
               <Col xs='auto'>
                  <Icon.PersonCircle width={30} height={30} />
               </Col>
               <Col xs='auto'>
                  <Dropdown>
                     <Dropdown.Toggle variant='outline-secondary' id='dropdown-basic'>
                        English
                     </Dropdown.Toggle>
                     <Dropdown.Menu>
                        <Dropdown.Item href='#/action-1'>English</Dropdown.Item>
                        <Dropdown.Item href='#/action-2'>French</Dropdown.Item>
                        <Dropdown.Item href='#/action-3'>Spanish</Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>
               </Col>
            </Row>
         </Container>
      </Navbar>
   );
}

export default Navigation;
