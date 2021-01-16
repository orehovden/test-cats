import React from 'react';
import {Container, Navbar} from 'react-bootstrap';

import {BreedSelector, CatsList} from 'components';

const Homepage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Cat Browser</Navbar.Brand>
      </Navbar>
      <Container className="pt-2">
        <BreedSelector />
        <CatsList />
      </Container>
    </>
  );
};

export default Homepage;
