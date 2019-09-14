import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';
import '../../../node_modules/react-vis/dist/style.css';

function SimpleTable({ title, subTitle, data }) {

  if (data.length < 1) {
    return <div className="mt-5">'Please select an account to view accounting entries'</div>
  }
  return (
    <Card style={{ width: "100%", border: "none" }}>
      <Card.Body>
        <h4>{title}</h4>
        <p>{subTitle}</p>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Account</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Timestamp</th>
              <th>Void reason</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data, index) => <tr>
              <td>{index + 1}</td>
              <td>{data.account}</td>
              <td>{data.debit}</td>
              <td>{data.credit}</td>
              <td>{data.timestamp}</td>
              <td>{data.voidReason}</td>
            </tr>)
            }
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

SimpleTable.defaultProps = {
  title: '',
  subTitle: '',
};

SimpleTable.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default SimpleTable;
