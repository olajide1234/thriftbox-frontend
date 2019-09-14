import React, { useState } from 'react';
import { Card, Row, Form, Col, Alert } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import { createNewAccount } from '../../data/actions/account';

function CreateAccount() {

  const [errors, setErrors] = useState([]);
  const [newAccountState, setNewAccountState] = useState({
    accountCode: null,
    accountName: null,
    toIncrease: null,
    isPorL: null,
    accountType: null,
    subAccountType: null,
    memo: null,
  });

  function updateFormState(event) {
    setNewAccountState({ ...newAccountState, [event.target.name]: event.target.value });
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await createNewAccount(newAccountState);
    if (response.success === true) {
      alert('New account successfully created')
      return window.location.reload();
    }
    return setErrors([response.message]);
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  return (
    <Card className="mt-4" style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Create new account</h3>
            <p>Create a new account in the financial book</p>
          </span>
        </div>

        <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>

        <Form className="mt-2 mb-2" style={{ width: "100%" }}>
          <Row className="px-3 py-3">
            <Col>
              <Row className="mx-3 my-4">
                <label htmlFor="accountCode"> Enter account code </label>
                <Form.Control type="text" id="accountCode" name="accountCode" onChange={updateFormState} />
              </Row>
              <Row className="mx-3 my-4">
                <label htmlFor="accountName"> Enter account name </label>
                <Form.Control type="text" id="accountName" name="accountName" onChange={updateFormState} />
              </Row>
            </Col>
            <Col>
              <Row className="mx-3 my-4">
                <label htmlFor="increasingEntry">Which entry increases account ?</label>
                <Form.Control as="select" id="increasingEntry" name="toIncrease" onChange={updateFormState}>
                  <option>Select entry type</option>
                  <option>Debit</option>
                  <option>Credit</option>
                </Form.Control>
              </Row>
              <Row className="mx-3 my-4">
                <label htmlFor="isPorL"> Is the account profit or loss ? </label>
                <Form.Control as="select" id="isPorL" name="isPorL" onChange={updateFormState}>
                  <option>Select true or false</option>
                  <option>true</option>
                  <option>false</option>
                </Form.Control>
              </Row>
              <Row className="mx-3 my-4">
                <label htmlFor="accountType"> Enter account type </label>
                <Form.Control type="text" id="accountType" name="accountType" onChange={updateFormState} />
              </Row>
            </Col>
            <Col>
              <Row className="mx-3 my-4">
                <label htmlFor="subAccountType">Enter sub-account type</label>
                <Form.Control type="text" id="subAccountType" name="subAccountType" onChange={updateFormState} />
              </Row>
              <Row className="mx-3 my-4">
                <label htmlFor="memo"> Enter memo </label>
                <textarea type="text" rows="6" cols="50" id="memo" name="memo" onChange={updateFormState} />
              </Row>
            </Col>
          </Row>
          <Row className="mt-3 d-flex justify-content-end">
            <LargeButton text="Create" classStyle="my-2 mr-3 px-3 greenButton" onClick={onSubmit} />
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CreateAccount;
