import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Form, Col, Alert } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import add from '../../assets/img/plusb.png';
import remove from '../../assets/img/remove.png';
import SingleEntry from '../SingleEntry';
import { postJournal } from '../../data/actions/account';

function AccountingEntry({ classStyle }) {

  const [transactionEntries, setTransactionEntries] = useState([1]);
  const [errors, setErrors] = useState([]);
  const [journalEntry, setjournalEntry] = useState(
    {
      memo: null,
      timestamp: `${new Date()}`,
      transactions: [{ exchangeRate: 0 }],
    }
  );

  function addSingleTransactionEntry(initialState) {
    setTransactionEntries([...initialState, (initialState.length + 1)]);
  }

  function removeSingleTransactionEntry(initialTransactionEntriesState, initialJournalEntriesState) {
    if (initialTransactionEntriesState.length > 1) {
      initialTransactionEntriesState.pop();
      let newArray = [...initialJournalEntriesState.transactions]
      newArray.pop();
      setTransactionEntries([...initialTransactionEntriesState]);
      setjournalEntry({ ...initialJournalEntriesState, transactions: newArray });
    }
  }

  function updateMemoState(event) {
    setjournalEntry({ ...journalEntry, memo: event.target.value });
  }

  function updateTransactionsState(name, value, x, accountCode) {
    let newArray = [...journalEntry.transactions]
    if (accountCode) {
      newArray[x - 1] = { ...newArray[x - 1], [name]: value, accountCode };
    } else {
      newArray[x - 1] = { ...newArray[x - 1], [name]: value };
    }
    setjournalEntry({ ...journalEntry, transactions: newArray });
  }

  function renderErrors(errorsArray) {
    return errorsArray.map(error => <Alert key={error} variant="danger">{error}</Alert>);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const response = await postJournal(journalEntry);
    if (response.success === true) {
      alert('Journals posted successfully')
      return window.location.reload();
    }
    return setErrors([response.message]);
  }

  return (
    <Card className={classStyle} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Post a new accounting entry</h3>
            <p>Create a new entry into the financial records</p>
          </span>

          <Row><Col md={{ span: 6, offset: 3 }}>{renderErrors(errors)}</Col></Row>

          <div className="d-flex justify-content-between mt-5">
            <h5>Memo</h5>
          </div>

          <Card className="mt-3" style={{ width: "100%" }}>
            <Card.Body>
              <Row className="mr-0 ml-0">
                <Form className="mt-2 mb-2" style={{ width: "100%" }}>
                  <Row className="d-flex">
                    <Col >
                      <label htmlFor="description"> Enter a short memo for the journal entry </label>
                      <Form.Control type="text" id="description" onChange={updateMemoState} />
                    </Col>
                  </Row>
                </Form>
              </Row>
            </Card.Body>
          </Card>


        </div>
        <div className="d-flex justify-content-between mt-5">
          <h5>Transactions</h5>
          <div>
            <img className="addButton mx-3" src={add} alt="Add more fields" onClick={() => addSingleTransactionEntry(transactionEntries)} />
            <img className="removeButton" src={remove} alt="Add last field" onClick={() => removeSingleTransactionEntry(transactionEntries, journalEntry)} />
          </div>
        </div>
        {transactionEntries.map(x => (<SingleEntry key={x} id={x} updateTransactionsState={updateTransactionsState} />))}

        <Row className="mt-3 d-flex justify-content-end">
          <LargeButton text="Post" classStyle="my-2 mr-3 px-3 greenButton" onClick={onSubmit} />
          <LargeButton text="Reset" classStyle="my-2 mx-3 px-4 redButton" onClick={f => f} />
        </Row>

      </Card.Body>
    </Card>
  );
}

AccountingEntry.defaultProps = {
  classStyle: '',
};

AccountingEntry.propTypes = {
  classStyle: PropTypes.string,
};

export default AccountingEntry;
