import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import { changeSavings } from '../../data/actions/account';


const SavingsChangeRequest = ({ classStyle, setErrors, currDate, currAmount }) => {

  const [newSavingsData, setnewSavingsData] = useState({
    prevSavingsAmount: currAmount,
    prevSavingsDate: currDate,
    nextSavingsAmount: null,
    nextSavingsDate: null,
    savingsDateAndAmountApproval: 'pending'
  });


  function updateLocalState(event) {
    setnewSavingsData({ ...newSavingsData, [event.target.name]: event.target.value });
  }

  async function onSubmit(event) {
    event.preventDefault();
    const result = await changeSavings(newSavingsData);
    if (result.success === true) {
      return window.location.reload();
    }

    return setErrors([result.message]);
  }

  return (
    <Card className={classStyle} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Savings change request</h3>
            <p>Request a change in your savings amount or date</p>
          </span>
        </div>
        <Row className="mr-0 ml-0 d-flex justify-content-center">
          <Form className="mt-4 mb-3">
            <Row className="d-flex align-items-center">
              <Col>
                <label htmlFor="nextSavingsAmount"> New savings amount </label>
                <Form.Control type="number" name="nextSavingsAmount" id="nextSavingsAmount" onChange={updateLocalState} />
              </Col>
              <Col>
                <label htmlFor="nextSavingsDate">Day</label>
                <Form.Control type="number" name="nextSavingsDate" id="day" onChange={updateLocalState} />
              </Col>
              <Col>
                <LargeButton type="submit" text="Submit" onClick={onSubmit} classStyle="pl-5 pr-5 mt-4" />
              </Col>
            </Row>
          </Form>
        </Row>
      </Card.Body>
    </Card>
  );
}

SavingsChangeRequest.defaultProps = {
  classStyle: '',
};

SavingsChangeRequest.propTypes = {
  classStyle: PropTypes.string,
};

export default SavingsChangeRequest;
