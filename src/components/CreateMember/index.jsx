import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Alert } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import { createNewMember } from '../../data/actions/users';

function CreateMember({ classStyle }) {

  const [errors, setErrors] = useState([]);
  const [userDetails, setUserDetails] = useState({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    joinDate: null,
    memberId: null,
    nextSavingsDate: null,
    nextSavingsAmount: null,
    position: null,
    isAdmin: null,
    phone: null,
    status: 'active',
    organization: null,
  });

  function updateLocalState(event) {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await createNewMember(userDetails);


    if (response.success === true) {
      alert('New member created successfully')
      return window.location.reload();
    }
    return setErrors([response.message]);
  }

  return (
    <Card className={`${classStyle} mt-4`} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Create new member</h3>
            <p>Create a new cooperative member</p>
          </span>
        </div>

        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>

        <Row className="mr-0 ml-0 mt-3">

          <Form className="mt-2 mb-2" style={{ width: "100%" }}>
            <Row className="d-flex align-items-center">
              <Col md={4}>
                <label htmlFor="memberemail">Enter member email</label>
                <Form.Control type="email" id="memberemail" name="email" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="firstname"> Enter member first name </label>
                <Form.Control type="text" id="firstname" name="firstName" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="lastname"> Enter member last name </label>
                <Form.Control type="text" id="lastname" name="lastName" onChange={updateLocalState} />
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={4}>
                <label htmlFor="password">Enter member password</label>
                <Form.Control type="password" id="password" name="password" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="memberrole">Enter member role (if any)</label>
                <Form.Control type="text" id="memberrole" name="position" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="joinDate">Select member join date</label>
                <Form.Control type="date" id="joinDate" name="joinDate" onChange={updateLocalState} />
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={4}>
                <label htmlFor="memberId">Member ID</label>
                <Form.Control type="text" id="memberId" name="memberId" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="organization">Organization</label>
                <Form.Control type="text" id="organization" name="organization" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="phone">Member phone number</label>
                <Form.Control type="number" id="phone" name="phone" onChange={updateLocalState} />
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={4}>
                <label htmlFor="savingsDay">Monthly savings day</label>
                <Form.Control type="number" id="savingsDay" name="nextSavingsDate" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="savingsAmount">Monthly savings amount</label>
                <Form.Control type="number" id="savingsAmount" name="nextSavingsAmount" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="isAdmin">Is member an admin ?</label>
                <Form.Control as="select" id="isAdmin" name="isAdmin" onChange={updateLocalState} >
                  <option>Select true or false</option>
                  <option>true</option>
                  <option>false</option>
                </ Form.Control>
              </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-end">
              <LargeButton text="Create" classStyle="my-2 mr-3 px-3 greenButton" onClick={onSubmit} />
            </Row>

          </Form>
        </Row>

      </Card.Body>
    </Card>
  );
}

CreateMember.defaultProps = {
  classStyle: '',
};

CreateMember.propTypes = {
  classStyle: PropTypes.string,
};

export default CreateMember;
