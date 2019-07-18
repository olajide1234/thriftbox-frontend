import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, } from 'react-bootstrap';
import LargeButton from '../LargeButton';

const requests = () => (
  <Row>
    <Col className="pr-0">
      <p className="mt-3 mb-2">74543</p>
    </Col>
    <Col className="pl-0 pr-0">
      <p className="mt-3 mb-2">Akinwale Habib</p>
    </Col>
    <Col className="pl-0 pr-0">
      <p className="mt-3 mb-2">60,000</p>
    </Col>
    <Col className="pl-0 pr-0">
      <p className="mt-3 mb-2">70,000</p>
    </Col>
    <Col className="pl-0">
      <p className="mt-3 mb-2">24 April 2019</p>
    </Col>
    <LargeButton text="Approve" classStyle="mt-2 mb-2 px-4" onClick={f => f} />
    <Col>
      <LargeButton text="Reject" classStyle="mt-2 mb-2 px-4" onClick={f => f} />
    </Col>
  </Row>
);

class SavingsChangeApproval extends React.Component {
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
              <h3 className="no-buttom-margin mb-4">Pending savings amount change request</h3>
              <Row className="pl-3">
                <Col>Member ID</Col>
                <Col>Member name</Col>
                <Col>Old savings</Col>
                <Col>New savings</Col>
                <Col>Start date</Col>
                <Col />
                <Col />
              </Row>
            </span>
          </div>
          <Row className="mr-0 ml-2 d-flex justify-content-center">
            <Card className="mt-4 pl-2" style={{ width: '100%' }}>
              {requests()}
            </Card>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

SavingsChangeApproval.defaultProps = {
  classStyle: '',
};

SavingsChangeApproval.propTypes = {
  classStyle: PropTypes.string,
};

export default SavingsChangeApproval;
