import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';
import LargeButton from '../LargeButton';

class DebtTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, subTitle, approval, data } = this.props;

    return (
      <Card style={{ width: "100%" }}>
        <Card.Body>
          <h4>{title}</h4>
          <p>{subTitle}</p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Loan amount</th>
                <th>Interest</th>
                <th>Fees</th>
                <th>Tenure</th>
                <th>Repayment</th>
                <th>Guarantor 1</th>
                <th>Guarantor 2</th>
                <th>Guarantor 3</th>
                <th>Status</th>
                <th>Type</th>
                <th>Comments</th>
                {approval ? <th /> : null}
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => <tr>
                <td>{index + 1}</td>
                <td>{`${new Date(entry.createdAt)}`}</td>
                <td>{entry.loanAmount}</td>
                <td>{entry.interest}</td>
                <td>{entry.fees}</td>
                <td>{entry.tenure}</td>
                <td>{entry.repayment}</td>
                <td>{entry.guarantor1}</td>
                <td>{entry.guarantor2}</td>
                <td>{entry.guarantor3}</td>
                <td>{entry.status}</td>
                <td>{entry.type}</td>
                <td>{entry.comments}</td>
                {approval ? (
                  <td className="d-flex justify-content-center">
                    <LargeButton text="Edit" classStyle="px-4 greyButton" onClick={f => f} />
                    <LargeButton text="Delete" classStyle="px-4 ml-3 redButton" onClick={f => f} />
                  </td>
                ) : null}
              </tr>)}
            </tbody>
          </Table>
          {/* <div className="d-flex justify-content-end">
            <button>Previous</button>
            <button>Next</button>
          </div> */}
        </Card.Body>
      </Card>
    );
  }
}

DebtTable.defaultProps = {
  title: '',
  subTitle: '',
};

DebtTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  approval: PropTypes.bool.isRequired
};

export default DebtTable;
