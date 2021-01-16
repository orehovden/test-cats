import React from 'react';
import {Col, Form} from 'react-bootstrap';

const BreedSelector = ({query}) => {
  return (
    <Col>
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Breed</Form.Label>
          <Form.Control as="select" custom>
            <option value={0}>Select breed</option>
            {query.data.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default BreedSelector;
