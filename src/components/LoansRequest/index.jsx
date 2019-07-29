import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import Autocomplete from '../Autocomplete';

class LoansRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { classStyle } = this.props;

    return (
      <Card className={classStyle} style={{ width: "100%" }}>
        <Card.Body>
          <div className="border-bottom">
            <span>
              <h3 className="no-buttom-margin">Loan requests</h3>
              <p>Use the options below to request for a new loan</p>
            </span>
          </div>
          <Row className="mr-0 ml-0 d-flex">
            <Form className="mt-4 mb-3">
              <Row>
                <Col md={3}>
                  <label htmlFor="newAmount"> Loan request amount </label>
                  <Form.Control id="newAmount" />
                </Col>
                <Col md={2}>
                  <label htmlFor="guarantor1">Choose Guarantor 1</label>
                  <Autocomplete
                    suggestions={[
                      "Femi Otedola",
                      "Seun John",
                      "Habib Akinwale",
                      "John Bull",
                      "Femi Awolowo",
                    ]}
                    id="guarantor1"
                  />
                </Col>
                <Col md={2}>
                  <label htmlFor="guarantor2">Choose Guarantor 2</label>
                  <Autocomplete
                    suggestions={[
                      "Femi Otedola",
                      "Seun John",
                      "Habib Akinwale",
                      "John Bull",
                      "Femi Awolowo",
                    ]}
                    id="guarantor2"
                  />
                </Col>
                <Col md={2}>
                  <label htmlFor="tenure">Loan tenure</label>
                  <Form.Control as="select" id="tenure">
                    <option>6 months</option>
                    <option>12 months</option>
                    <option>18 months</option>
                  </Form.Control>
                </Col>
                <Col md={1}>
                  <LargeButton type="submit" text="Submit" classStyle="pl-5 pr-5 mt-4" />
                </Col>
              </Row>
            </Form>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

LoansRequest.defaultProps = {
  classStyle: '',
};

LoansRequest.propTypes = {
  classStyle: PropTypes.string,
};

export default LoansRequest;
