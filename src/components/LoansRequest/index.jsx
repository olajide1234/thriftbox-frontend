import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';


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
          <Row className="mr-0 ml-0 d-flex justify-content-center">
            <Form className="mt-4 mb-3">
              <Row className="d-flex align-items-center">
                <Col>
                  <label htmlFor="newAmount"> Loan request amount </label>
                  <Form.Control id="newAmount" />
                </Col>
                <Col>
                  <label htmlFor="guarantor1">Choose Guarantor 1</label>
                  <Form.Control as="select" id="guarantor1">
                    <option>Femi Otedola</option>
                    <option>Seun John</option>
                  </Form.Control>
                </Col>
                <Col>
                  <label htmlFor="guarantor2">Choose Guarantor 1</label>
                  <Form.Control as="select" id="guarantor2">
                    <option>Femi Otedola</option>
                    <option>Seun John</option>
                  </Form.Control>
                </Col>
                <Col>
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
