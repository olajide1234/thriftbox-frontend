import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import Autocomplete from '../Autocomplete';
import { allMembers } from '../../data/actions/users';
import { requestLoan } from '../../data/actions/account';
import Loader from '../../components/Loader';

function LoansRequest({ classStyle, setErrors }) {
  const [memberDetails, setMemberDetails] = useState([]);
  const [loanApplication, setloanApplication] = useState({});

  let names;
  let nameId = {};

  function updateLocalState(event) {
    setloanApplication({ ...loanApplication, [event.target.name]: event.target.value });
  }

  function updateguarantor1Id(name) {
    setloanApplication({ ...loanApplication, guarantor1Id: nameId[name] });
  }

  function updateguarantor2Id(name) {
    setloanApplication({ ...loanApplication, guarantor2Id: nameId[name] });
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await requestLoan(loanApplication);

    if (response.success === true) {
      // return window.location.reload();
    }
    return setErrors([response.message]);
  }

  useEffect(() => {
    async function fetchData() {
      const details = await allMembers();
      if (details.success === true) {
        setMemberDetails(details.data);
      }
    }
    fetchData();
  }, []);


  if (memberDetails.length < 1) {
    return <div className='center'><Loader /></div>
  }

  if (memberDetails.length > 1) {
    names = memberDetails.map(data => `${data.firstName} ${data.lastName}`);
    memberDetails.map(data => {
      return nameId[`${data.firstName} ${data.lastName}`] = data.id;
    });
  }

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
                <label htmlFor="loanAmount"> Loan request amount </label>
                <Form.Control id="loanAmount" type='number' name="loanAmount" onChange={updateLocalState} />
              </Col>
              <Col md={2}>
                <label htmlFor="guarantor1Id">Choose Guarantor 1</label>
                <Autocomplete
                  suggestions={names}
                  optionClick={(e) => updateguarantor1Id(e.currentTarget.innerText)}
                  id="guarantor1Id"
                />
              </Col>
              <Col md={2}>
                <label htmlFor="guarantor2Id">Choose Guarantor 2</label>
                <Autocomplete
                  suggestions={names}
                  optionClick={(e) => updateguarantor2Id(e.currentTarget.innerText)}
                  id="guarantor2Id"
                />
              </Col>
              <Col md={2}>
                <label htmlFor="tenure">Loan tenure</label>
                <Form.Control as="select" id="tenure" name="tenure" onChange={updateLocalState}>
                  <option value={null}>Select tenure</option>
                  <option value={6} >6 months</option>
                  <option value={12}>12 months</option>
                  <option value={12}>18 months</option>
                </Form.Control>
              </Col>
              <Col md={3}>
                <label htmlFor="comments"> Comments </label>
                <Form.Control id="comments" type="text" name="comments" onChange={updateLocalState} />
              </Col>
            </Row>
            <Row>
              <Col md={1}>
                <LargeButton type="submit" text="Submit" onClick={onSubmit} classStyle="pl-5 pr-5 mt-4" />
              </Col>
            </Row>
          </Form>
        </Row>
      </Card.Body>
    </Card>
  );
}

LoansRequest.defaultProps = {
  classStyle: '',
};

LoansRequest.propTypes = {
  classStyle: PropTypes.string,
};

export default LoansRequest;
