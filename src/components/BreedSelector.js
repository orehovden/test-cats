import React from 'react';
import {Col, Form, Row} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {Query} from '@redux-requests/react';

import {selectBreed} from 'store/actions';
import {FETCH_BREEDS} from 'store/constants';
import {LoadingSpinner} from 'components';

const BreedSelector = () => {
  const dispatch = useDispatch();
  const breedId = useSelector((state) => state.breed.breedId);

  const onSelect = (breedId) => {
    dispatch(selectBreed(breedId));
  };

  return (
    <Row>
      <Col>
        <Query
          type={FETCH_BREEDS}
          noDataMessage="There is no data"
          loadingComponent={LoadingSpinner}
        >
          {({data}) => (
            <Form>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  as="select"
                  custom
                  onChange={(event) => onSelect(event.target.value)}
                  value={breedId}
                >
                  <option value={0}>Select breed</option>
                  {data.map((breed) => (
                    <option key={breed.id} value={breed.id}>
                      {breed.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          )}
        </Query>
      </Col>
    </Row>
  );
};

export default BreedSelector;
