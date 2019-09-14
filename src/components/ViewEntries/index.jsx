import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import SimpleTable from '../SimpleTable';
import { getTransactions, activeAccounts } from '../../data/actions/account';
import Loader from '../Loader';

function ViewEntries({ classStyle }) {

  const [transactionsState, setTransactionsState] = useState([]);
  const [activeAccoutsState, setActiveAccoutsState] = useState([]);
  const [transactionsRequestState, setTransactionsRequestState] = useState({
    account: null,
    accountCode: null,
  });
  useEffect(() => {
    async function fetchData() {
      const details = await activeAccounts();
      if (details.success === true) {
        setActiveAccoutsState(details.data);
      }
    }
    fetchData();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    const requests = await getTransactions(transactionsRequestState);
    if (requests.success === true) {
      alert('Transactions fetched successfully')
      return setTransactionsState(requests.data);
    }
    // return setErrors([requests.message]);
  }


  function updateTransactionsState(name, value, accountCode) {
    setTransactionsRequestState({ ...transactionsRequestState, [name]: value, accountCode });
  }

  if (!transactionsState) {
    return <div className='center'><Loader /></div>
  }

  return (
    <Card className={`${classStyle} mt-4`} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">View account entries</h3>
            <p>View all entries in an account</p>
          </span>
        </div>

        <Row className="mr-0 ml-0 mt-3">
          <Form className="mt-2 mb-2" style={{ width: "100%" }}>
            <Row className="d-flex align-items-center">
              <Col md={3}>
                <label htmlFor="account"> Select account </label>
                <Form.Control as="select" id="account" name="account" onChange={(event) => { updateTransactionsState(event.target.name, event.target.value, event.target.selectedOptions[0].getAttribute("code")) }}>
                  <option key={'select account'}>Select account</option>
                  {activeAccoutsState.map(data => <option code={data.accountCode} key={data.accountCode}>{`${data.accountName}`}</option>)}
                </Form.Control>
              </Col>
              <Col md={1.5}>
                <LargeButton text="View entries" classStyle="ml-4 mt-4 greenButton" onClick={onSubmit} />
              </Col>
            </Row>
          </Form>
        </Row>
        <SimpleTable data={transactionsState} />
      </Card.Body>
    </Card>
  );
}

ViewEntries.defaultProps = {
  classStyle: '',
};

ViewEntries.propTypes = {
  classStyle: PropTypes.string,
};

export default ViewEntries;
