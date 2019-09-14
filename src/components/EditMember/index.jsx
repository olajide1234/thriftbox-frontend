import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Alert } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import { getCurrentMember, editNewMember } from '../../data/actions/users';

function EditMember({ classStyle }) {

  const [errors, setErrors] = useState([]);
  const [currentDetails, setCurrentDetails] = useState('');
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

  function updateUserToEditState(event) {
    setCurrentDetails(event.target.value);
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await editNewMember(currentDetails, userDetails);

    if (response.success === true) {
      alert('Exsiting member data updated successfully')
      return window.location.reload();
    }
    return setErrors([response.message]);
  }


  async function onRequest(event) {
    event.preventDefault();
    const response = await getCurrentMember(currentDetails);
    if (response.success === true) {
      setErrors([])
      return setUserDetails(response.data);
    }
    return setErrors([response.message]);
  }

  return (
    <Card className={`${classStyle} mt-4 mb-4`} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Edit existing member</h3>
            <p>Edit an existing member details</p>
          </span>
        </div>

        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>


        <Row className="justify-content-center">
          <Form>
            <Row>
              <Col className="mt-4">
                <label htmlFor="cmemberId">Enter member ID</label>
              </Col>
              <Col className="mt-3">
                <Form.Control type="text" id="cmemberId" name="memberId" onChange={updateUserToEditState} />
              </Col>
              <Col className="mt-1">
                <LargeButton text="Edit" classStyle="my-2 mr-3 px-3 greenButton" onClick={onRequest} />
              </Col>
            </Row>
          </Form>
        </Row>

        {userDetails.firstName ? <Row className="mr-0 ml-0 mt-3">

          <Form className="mt-2 mb-2" style={{ width: "100%" }}>
            <Row className="d-flex align-items-center">
              <Col md={4}>
                <label htmlFor="editmemberemail">Enter member email</label>
                <Form.Control type="email" defaultValue={userDetails.email} id="editmemberemail" name="email" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="editfirstname"> Enter member first name </label>
                <Form.Control type="text" defaultValue={userDetails.firstName} id="editfirstname" name="firstName" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="editlastname"> Enter member last name </label>
                <Form.Control type="text" defaultValue={userDetails.lastName} id="editlastname" name="lastName" onChange={updateLocalState} />
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={4}>
                <label htmlFor="editmemberrole">Enter member role (if any)</label>
                <Form.Control type="text" defaultValue={userDetails.position} id="editmemberrole" name="position" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="editjoinDate">Select member join date</label>
                <Form.Control type="date" defaultValue={userDetails.joinDate} id="editjoinDate" name="joinDate" onChange={updateLocalState} />
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={4}>
                <label htmlFor="editmemberId">Member ID</label>
                <Form.Control type="text" defaultValue={userDetails.memberId} id="editmemberId" name="memberId" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="editorganization">Organization</label>
                <Form.Control type="text" defaultValue={userDetails.organization} id="editorganization" name="organization" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="editphone">Member phone number</label>
                <Form.Control type="number" defaultValue={userDetails.phone} id="editphone" name="phone" onChange={updateLocalState} />
              </Col>
            </Row>

            <Row className="d-flex align-items-center mt-4">
              <Col md={4}>
                <label htmlFor="editsavingsDay">Monthly savings day</label>
                <Form.Control type="number" defaultValue={userDetails.nextSavingsDate} id="editsavingsDay" name="nextSavingsDate" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="editsavingsAmount">Monthly savings amount</label>
                <Form.Control type="number" defaultValue={userDetails.nextSavingsAmount} id="editsavingsAmount" name="nextSavingsAmount" onChange={updateLocalState} />
              </Col>
              <Col md={4}>
                <label htmlFor="editisAdmin">Is member an admin ?</label>
                <Form.Control as="select" defaultValue={userDetails.isAdmin} id="editisAdmin" name="isAdmin" onChange={updateLocalState} >
                  <option>Select true or false</option>
                  <option>true</option>
                  <option>false</option>
                </ Form.Control>
              </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-end">
              <LargeButton text="Submit" classStyle="my-2 mr-3 px-3 greenButton" onClick={onSubmit} />
            </Row>

          </Form>
        </Row> : null}

      </Card.Body>
    </Card>
  );
}

EditMember.defaultProps = {
  classStyle: '',
};

EditMember.propTypes = {
  classStyle: PropTypes.string,
};

export default EditMember;
