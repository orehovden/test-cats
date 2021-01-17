import React from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap';
import {Query} from '@redux-requests/react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {LoadingSpinner} from 'components';
import {SELECT_BREED_IMAGES} from 'store/constants';
import {fetchBreedImages} from 'store/actions';

const CatsList = () => {
  const dispatch = useDispatch();
  const {page, breedId} = useSelector((state) => state.breed);

  const loadMore = () => {
    dispatch(fetchBreedImages(breedId, page));
  };

  return (
    <Row>
      <Query
        type={SELECT_BREED_IMAGES}
        noDataMessage="No cats available"
        loadingComponent={LoadingSpinner}
      >
        {({data: {breedImages = [], hasMore = false}}) => (
          <>
            {breedImages.map((breedImage) => (
              <Col key={breedImage.id} md={3} className="pb-3">
                <Card>
                  <Card.Img variant="top" src={breedImage.url} />
                  <Card.Body>
                    <NavLink
                      to={`/breed/${breedImage.id}`}
                      className="w-100 btn btn-primary"
                    >
                      View Details
                    </NavLink>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {hasMore && (
              <Col md={12} className="pb-5">
                <Button variant="success" onClick={loadMore}>
                  Load more
                </Button>
              </Col>
            )}
          </>
        )}
      </Query>
    </Row>
  );
};

export default CatsList;
