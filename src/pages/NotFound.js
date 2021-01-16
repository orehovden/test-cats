import React from 'react';
import {Col, Container, Navbar, Row} from 'react-bootstrap';

const NotFound = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Cat Browser</Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <h1>Not Found</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotFound;
