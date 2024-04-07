import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container>
      <h1 className="mt-5 mb-4">Contact Us</h1>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your first name" />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your last name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div>
            <h2>Contact Information</h2>
            <p>
              Address: 8 Lewisham Way, London SE14 6NW
              <br />
              Email: tapoutgoldsmiths@gmail.com
            </p>
            <p>Follow our festival page on instagram:</p>
            <div>
             
              <br />
              <a href="https://www.instagram.com/tapoutfest24" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
