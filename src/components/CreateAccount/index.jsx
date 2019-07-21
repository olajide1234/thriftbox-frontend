import React from 'react';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="mt-4" style={{ width: "100%" }}>
        <Card.Body>
          <div className="border-bottom">
            <span>
              <h3 className="no-buttom-margin">Create new account</h3>
              <p>Create a new account in the financial book</p>
            </span>
          </div>

          <Form className="mt-2 mb-2" style={{ width: "100%" }}>
            <Row className="px-3 py-3">
              <Col>
                <Row className="mx-3 my-4">
                  <label htmlFor="book">Select book</label>
                  <Form.Control as="select" id="book">
                    <option>First book</option>
                    <option>Second book</option>
                  </Form.Control>
                </Row>
                <Row className="mx-3 my-4">
                  <label htmlFor="accountCode"> Enter account code </label>
                  <Form.Control type="text" id="accountCode" />
                </Row>
                <Row className="mx-3 my-4">
                  <label htmlFor="accountName"> Enter account name </label>
                  <Form.Control type="text" id="accountName" />
                </Row>
              </Col>
              <Col>
                <Row className="mx-3 my-4">
                  <label htmlFor="increasingEntry">Which entry increases account ?</label>
                  <Form.Control as="select" id="increasingEntry">
                    <option>Debit</option>
                    <option>Credit</option>
                  </Form.Control>
                </Row>
                <Row className="mx-3 my-4">
                  <label htmlFor="isPorL"> Is the account profit or loss ? </label>
                  <Form.Control as="select" id="isPorL">
                    <option>Profit</option>
                    <option>Loss</option>
                  </Form.Control>
                </Row>
                <Row className="mx-3 my-4">
                  <label htmlFor="accountType"> Enter account type </label>
                  <Form.Control type="text" id="accountType" />
                </Row>
              </Col>
              <Col>
                <Row className="mx-3 my-4">
                  <label htmlFor="subAccountType">Enter sub-account type</label>
                  <Form.Control type="text" id="subAccountType" />
                </Row>
                <Row className="mx-3 my-4">
                  <label htmlFor="memo"> Enter memo </label>
                  <textarea type="text" rows="6" cols="50" id="memo" />
                </Row>
              </Col>
            </Row>
            <Row className="mt-3 d-flex justify-content-end">
              <LargeButton text="Create" classStyle="my-2 mr-3 px-3" onClick={f => f} />
              <LargeButton text="Reset" classStyle="my-2 mx-3 px-4" onClick={f => f} />
            </Row>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default CreateAccount;
