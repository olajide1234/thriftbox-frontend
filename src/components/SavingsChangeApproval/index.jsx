import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import Loader from '../../components/Loader';
import { getPendingRequests, savingsApproval } from '../../data/actions/account';

function Requests({ requestsState, onApprove }) {

  return (
    requestsState.map(data =>
      <Row>
        <Col className="pr-0">
          <p className="mt-3 mb-2">{data.memberId}</p>
        </Col>
        <Col className="pl-0 pr-0">
          <p className="mt-3 mb-2">{`${data.firstName} ${data.lastName} `}</p>
        </Col>
        <Col className="pl-0 pr-0">
          <p className="mt-3 mb-2">{data.prevSavingsDate}</p>
        </Col>
        <Col className="pl-0 pr-0">
          <p className="mt-3 mb-2">{data.nextSavingsDate}</p>
        </Col>
        <Col className="pl-0 pr-0">
          <p className="mt-3 mb-2">{data.prevSavingsAmount}</p>
        </Col>
        <Col className="pl-0 pr-0">
          <p className="mt-3 mb-2">{data.nextSavingsAmount}</p>
        </Col>
        <LargeButton text="Approve" classStyle="mt-2 mb-2 px-4 greenButton" onClick={() => onApprove(data.id, 'approved', data.prevSavingsDate, data.nextSavingsDate, data.prevSavingsAmount, data.nextSavingsAmount, data.email)} />
        <Col>
          <LargeButton text="Reject" classStyle="mt-2 mb-2 px-4 redButton" onClick={() => onApprove(data.id, 'rejected', data.prevSavingsDate, data.nextSavingsDate, data.prevSavingsAmount, data.nextSavingsAmount, data.email)} />
        </Col>
      </Row>
    )
  )
};

function SavingsChangeApproval({ classStyle, setErrors }) {

  const [requestsState, setrequestsState] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const requests = await getPendingRequests();
      if (requests.success === true) {
        setrequestsState(requests.data);
      }
    }
    fetchData();
  }, []);

  async function onApprove(id, approval, prevSavingsDate, nextSavingsDate, prevSavingsAmount, nextSavingsAmount, email) {
    let data = {}


    if (approval === 'approved') {
      data.nextSavingsDate = nextSavingsDate;
      data.nextSavingsAmount = nextSavingsAmount;
      data.savingsDateAndAmountApproval = 'approved';
    }

    if (approval === 'rejected') {
      data.nextSavingsDate = prevSavingsDate;
      data.nextSavingsAmount = prevSavingsAmount;
      data.prevSavingsAmount = null;
      data.prevSavingsDate = null;
      data.savingsDateAndAmountApproval = 'rejected';
    }


    const result = await savingsApproval(id, data, email);
    if (result.success === true) {
      return window.location.reload();
    }

    return setErrors([result.message]);
  }

  if (!requestsState) {
    return <div className='center'><Loader /></div>
  }

  return (
    <Card className={classStyle} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin mb-4">Pending savings amount change request</h3>
            {requestsState.length >= 1 ? <Row className="pl-3">
              <Col>Member ID</Col>
              <Col>Member name</Col>
              <Col>Old savings day</Col>
              <Col>New savings day</Col>
              <Col>Old savings amount</Col>
              <Col>New savings amount</Col>
              <Col />
              <Col />
            </Row> : 'There are no pending savings change request'}
          </span>
        </div>
        <Row className="mr-0 ml-2 d-flex justify-content-center">
          <Card className="mt-4 pl-2" style={{ width: '100%' }}>
            <Requests requestsState={requestsState} onApprove={onApprove} />
          </Card>
        </Row>
      </Card.Body>
    </Card>
  );
}

SavingsChangeApproval.defaultProps = {
  classStyle: '',
};

SavingsChangeApproval.propTypes = {
  classStyle: PropTypes.string,
};

export default SavingsChangeApproval;
