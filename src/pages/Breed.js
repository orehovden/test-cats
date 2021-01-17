import React, {useEffect} from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import {Query} from '@redux-requests/react';
import {NavLink, useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {FETCH_BREED} from 'store/constants';
import {fetchBreed} from 'store/actions';
import {LoadingSpinner} from 'components';

const Breed = () => {
  const dispatch = useDispatch();
  let {imageId} = useParams();

  useEffect(() => {
    dispatch(fetchBreed(imageId));
  }, [dispatch, imageId]);

  return (
    <Container className="pt-2">
      <Row className="pb-5">
        <Col>
          <Query type={FETCH_BREED} loadingComponent={LoadingSpinner}>
            {({data: {breeds, url}}) => (
              <Card>
                <Card.Header>
                  <NavLink to="/" className="btn btn-primary">
                    Back
                  </NavLink>
                </Card.Header>
                <Card.Body>
                  <Card.Img variant="top" src={url} />
                  <Card.Title className="mt-4">{breeds[0].name}</Card.Title>
                  <Card.Title>Origin: {breeds[0].origin}</Card.Title>
                  <Card.Text className="font-weight-bold">
                    {breeds[0].temperament}
                  </Card.Text>
                  <Card.Text>{breeds[0].description}</Card.Text>
                </Card.Body>
              </Card>
            )}
          </Query>
        </Col>
      </Row>
    </Container>
  );
};

export default Breed;
