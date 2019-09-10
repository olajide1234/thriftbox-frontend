import React from 'react';
import { Card, Row, Form, Col } from 'react-bootstrap';
import Autocomplete from '../Autocomplete';

function SingleEntry() {
  return (
    <Card className="mt-3" style={{ width: "100%" }}>
      <Card.Body>
        <Row className="mr-0 ml-0">
          <Form className="mt-2 mb-2" style={{ width: "100%" }}>
            <Row className="d-flex">
              <Col md={3}>
                <label htmlFor="account">Select account</label>
                <Form.Control as="select" id="account">
                  <option>Asset</option>
                  <option>Savings</option>
                </Form.Control>
              </Col>
              <Col md={2}>
                <label htmlFor="amount"> Amount </label>
                <Form.Control type="text" id="amount" />
              </Col>
              <Col md={3}>
                <label htmlFor="subaccount"> Sub-account </label>
                <Autocomplete
                  suggestions={[
                    "Femi Otedola",
                    "Seun John",
                    "Habib Akinwale",
                    "John Bull",
                    "Femi Awolowo",
                  ]}
                  id="subaccount"
                />
              </Col>
              <Col md={4}>
                <label htmlFor="description"> Memo </label>
                <Form.Control type="text" id="description" />
              </Col>
            </Row>
          </Form>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SingleEntry;
