import React from 'react';
import {Col, Container, Navbar, Row, Spinner} from 'react-bootstrap';
import {Query} from '@redux-requests/react';

import {FETCH_BREEDS} from 'store/constants';
import BreedSelector from 'components/BreedSelector';

const Homepage = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Cat Browser</Navbar.Brand>
      </Navbar>
      <Container className="pt-2">
        <Row>
          <Col>
            <Query
              type={FETCH_BREEDS}
              component={BreedSelector}
              loadingComponent={Spinner}
              loadingComponentProps={{animation: 'border'}}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homepage;
