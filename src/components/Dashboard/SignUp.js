import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SignUp = () => (
  <div>
    <h1 className="text-center mt-5">Sign Up User</h1>
    <div className="col-8 offset-2">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} sm={12} md={6} lg={6} controlId="formGridName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} sm={12} md={6} lg={6} controlId="formGridName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Enter email" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="23480...." />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group controlId="formFileSm" className="mb-3 col-2">
          <Form.Label>Picture</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <Form.Group controlId="formFileSm" className="mb-3 col-2">
          <Form.Label>Means of Id</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <Button as={Col} sm={12} variant="primary">Register</Button>
      </Form>
    </div>
  </div>
);

export default SignUp;
