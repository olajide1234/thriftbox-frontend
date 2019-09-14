import React, { useState, useEffect } from 'react';
import { Card, Row, Form, Col } from 'react-bootstrap';
import { activeAccounts } from '../../data/actions/account';
import Loader from '../../components/Loader';

function SingleEntry({ id, updateTransactionsState }) {

  const [activeAccoutsState, setActiveAccoutsState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const details = await activeAccounts();
      if (details.success === true) {
        setActiveAccoutsState(details.data);
      }
    }
    fetchData();
  }, []);

  let accounts;

  if (activeAccoutsState.length < 1) {
    return <div className='center'><Loader /></div>
  }

  if (activeAccoutsState.length >= 1) {
    accounts = activeAccoutsState.map(data => `${data.accountCode} ${data.accountName}`);
  }

  return (
    <Card className="mt-3" style={{ width: "100%" }}>
      <Card.Body>
        <Row className="mr-0 ml-0">
          <Form className="mt-2 mb-2" style={{ width: "100%" }}>
            <Row className="d-flex">
              <Col md={3}>
                <label htmlFor="account">Select account</label>
                <Form.Control as="select" id="account" name="account" onChange={(event) => { updateTransactionsState(event.target.name, event.target.value, id, event.target.selectedOptions[0].getAttribute("code")) }
                }>
                  <option key={'select account'}>Select account</option>
                  {activeAccoutsState.map(data => <option code={data.accountCode} key={data.accountCode}>{`${data.accountName}`}</option>)}
                </Form.Control>
              </Col>
              <Col md={3}>
                <label htmlFor="creditAmount"> Credit amount </label>
                <Form.Control type="text" id="creditAmount" name="credit" onChange={(event) => updateTransactionsState(event.target.name, event.target.value, id)} />
              </Col>
              <Col md={3}>
                <label htmlFor="debitAmount"> Debit amount </label>
                <Form.Control type="text" id="debitAmount" name="debit" onChange={(event) => updateTransactionsState(event.target.name, event.target.value, id)} />
              </Col>
              <Col md={3}>
                <label htmlFor="userId"> User Id </label>
                <Form.Control type="text" id="userId" name="userId" onChange={(event) => updateTransactionsState(event.target.name, event.target.value, id)} />
              </Col>
              <Col md={3}>
                <label htmlFor="companyId"> Company Id </label>
                <Form.Control type="text" id="companyId" name="companyId" onChange={(event) => updateTransactionsState(event.target.name, event.target.value, id)} />
              </Col>
            </Row>
          </Form>
          <div>Enter only one of companyID or userID but not both</div>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SingleEntry;
