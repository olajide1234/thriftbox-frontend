import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import add from '../../assets/img/plusb.png';
import remove from '../../assets/img/remove.png';
import SingleEntry from '../SingleEntry';

function AccountingEntry({ classStyle }) {

  const [debitEntries, setdebitEntries] = useState([1]);
  const [creditEntries, setcreditEntries] = useState([1]);

  function addSingleDebitEntry(initialState) {
    setdebitEntries([...initialState, (initialState.length + 1)]);
  }

  function addSingleCreditEntry(initialState) {
    setcreditEntries([...initialState, (initialState.length + 1)]);
  }

  function removeSingleDebitEntry(initialState) {
    if (initialState.length > 1) {
      initialState.pop();
      setdebitEntries([...initialState]);
    }
  }

  function removeSingleCreditEntry(initialState) {
    if (initialState.length > 1) {
      initialState.pop();
      setcreditEntries([...initialState]);
    }
  }

  console.log('debit', debitEntries);
  return (
    <Card className={classStyle} style={{ width: "100%" }}>
      <Card.Body>
        <div className="border-bottom">
          <span>
            <h3 className="no-buttom-margin">Post a new accounting entry</h3>
            <p>Create a new entry into the financial records</p>
          </span>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <h5>Debit</h5>
          <div>
            <img className="addButton mx-3" src={add} alt="Add more fields" onClick={() => addSingleDebitEntry(debitEntries)} />
            <img className="removeButton" src={remove} alt="Add last field" onClick={() => removeSingleDebitEntry(debitEntries)} />
          </div>
        </div>
        {debitEntries.map(x => (<SingleEntry key={x} />))}
        <div className="d-flex justify-content-between mt-5">
          <h5>Credit</h5>
          <div>
            <img className="addButton mx-3" src={add} alt="Add more fields" onClick={() => addSingleCreditEntry(creditEntries)} />
            <img className="removeButton" src={remove} alt="Remove last field" onClick={() => removeSingleCreditEntry(creditEntries)} />
          </div>
        </div>
        {creditEntries.map(x => (<SingleEntry key={x} />))}

        <Row className="mt-3 d-flex justify-content-end">
          <LargeButton text="Post" classStyle="my-2 mr-3 px-3 greenButton" onClick={f => f} />
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
