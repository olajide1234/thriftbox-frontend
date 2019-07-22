import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row } from 'react-bootstrap';
import LargeButton from '../LargeButton';
import add from '../../assets/img/plusb.png';
import remove from '../../assets/img/remove.png';
import SingleEntry from '../SingleEntry';

class AccountingEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      debitEntries: [1],
      creditEntries: [1]
    };
  }

  addSingleEntry = (initialState) => {
    const copyOfInitial = initialState;
    copyOfInitial.push(copyOfInitial.length + 1);
    this.setState({ [initialState]: copyOfInitial });
  }

  removeSingleEntry = (initialState) => {
    const copyOfInitial = initialState;
    if (copyOfInitial.length > 1) {
      copyOfInitial.pop();
      this.setState({ [initialState]: copyOfInitial });
    }
  }

  render() {
    const { classStyle } = this.props;
    const { debitEntries, creditEntries } = this.state;

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
              <img className="addButton mx-3" src={add} alt="Add more fields" onClick={() => this.addSingleEntry(debitEntries)} />
              <img className="removeButton" src={remove} alt="Add last field" onClick={() => this.removeSingleEntry(debitEntries)} />
            </div>
          </div>
          {this.state.debitEntries.map(x => (<SingleEntry key={x} />))}
          <div className="d-flex justify-content-between mt-5">
            <h5>Credit</h5>
            <div>
              <img className="addButton mx-3" src={add} alt="Add more fields" onClick={() => this.addSingleEntry(creditEntries)} />
              <img className="removeButton" src={remove} alt="Remove last field" onClick={() => this.removeSingleEntry(creditEntries)} />
            </div>
          </div>
          {this.state.creditEntries.map(x => (<SingleEntry key={x} />))}

          <Row className="mt-3 d-flex justify-content-end">
            <LargeButton text="Post" classStyle="my-2 mr-3 px-3 greenButton" onClick={f => f} />
            <LargeButton text="Reset" classStyle="my-2 mx-3 px-4 redButton" onClick={f => f} />
          </Row>

        </Card.Body>
      </Card>
    );
  }
}

AccountingEntry.defaultProps = {
  classStyle: '',
};

AccountingEntry.propTypes = {
  classStyle: PropTypes.string,
};

export default AccountingEntry;
