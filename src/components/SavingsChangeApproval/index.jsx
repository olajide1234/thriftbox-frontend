import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';


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
              <h3 className="no-buttom-margin">Savings change request</h3>
              <p>Approve or reject savings change request</p>
            </span>
          </div>
          <Row className="mr-0 ml-0 d-flex justify-content-center">
            <Form className="mt-4 mb-3">
              <Row className="d-flex align-items-center">
                <Col>
                  <label htmlFor="newAmount"> New savings amount </label>
                  <Form.Control id="newAmount" />
                </Col>
                <Col>
                  <label htmlFor="startDate">Start date</label>
                  <Form.Control type="date" id="startDate" />
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

SavingsChangeApproval.defaultProps = {
  classStyle: '',
};

SavingsChangeApproval.propTypes = {
  classStyle: PropTypes.string,
};

export default SavingsChangeApproval;
